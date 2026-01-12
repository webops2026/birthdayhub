#!/bin/bash

# BirthdayHub AI開発 起動スクリプト
# 社長システム廃止版: 複数AI同時稼働による描画問題を解消、シンプルなtmuxセッションで運用

BRAND_NAME="birthdayhub"
PROJECT_DIR="/root/legacybrands/birthdayhub"
SESSION_NAME="${BRAND_NAME}-dev"

INIT_MESSAGE="CLAUDE.mdと/root/legacybrands/docs/共通開発ルール.mdを読んでください。準備ができたらオーナー（私）に挨拶して「このプロジェクトで何をしましょうか？」と聞いてください。作業後はドキュメントの更新を忘れずに行ってください。"

echo "🚀 $BRAND_NAME 開発セッションを起動します..."

# tmux内かどうかで接続方法を変える
connect_session() {
    if [ -n "$TMUX" ]; then
        # 既に同じセッション内にいるかチェック
        CURRENT_SESSION=$(tmux display-message -p '#S')
        if [ "$CURRENT_SESSION" = "$SESSION_NAME" ]; then
            echo "✅ 既にこのセッション内にいます"
            echo "🖥️  新しいウィンドウでClaude Codeを起動します..."
            tmux new-window -t $SESSION_NAME -c "$PROJECT_DIR"
            tmux send-keys "claude" C-m
            echo "⏳ Claude Codeの起動を待っています（3秒）..."
            sleep 3
            echo "📨 初期メッセージを送信中..."
            tmux send-keys "$INIT_MESSAGE" C-m
            exit 0
        fi
        exec tmux switch-client -t $SESSION_NAME
    else
        exec tmux attach -t $SESSION_NAME
    fi
}

# 既存セッションがあれば接続、なければ新規作成
if tmux has-session -t $SESSION_NAME 2>/dev/null; then
    echo "📎 既存セッションに接続します..."
    connect_session
else
    echo "🆕 新しいセッションを作成します..."
    tmux new-session -d -s $SESSION_NAME -c "$PROJECT_DIR"
    tmux send-keys -t $SESSION_NAME "claude" C-m

    echo "⏳ Claude Codeの起動を待っています（10秒）..."
    sleep 10

    echo "📨 初期メッセージを送信中..."
    tmux send-keys -t $SESSION_NAME "$INIT_MESSAGE" C-m

    sleep 2
    connect_session
fi
