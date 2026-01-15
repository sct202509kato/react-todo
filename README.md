# 📌 Todo App（React / TypeScript）
React と TypeScript を用いて作成した Todo アプリです。
フォーム入力、状態管理、一覧表示、完了管理など、React の基本的なデータフローを一通り実装しました。

## Screenshot
<img width="300" height="260" alt="スクリーンショット 2026-01-14 232236" src="https://github.com/user-attachments/assets/79901927-a3eb-4cce-b8d2-9217d2596b1d" />

## 🔗 Demo
https://sct202509kato.github.io/react-todo/

## ✨ 機能
Todo の追加・削除
完了 / 未完了の切り替え
完了タスクの一括削除
完了タスクは下に移動して表示
localStorage によるデータ保存（リロード後も保持）

## 🛠 使用技術
React
TypeScript
Vite
CSS（シンプルなコンポーネント設計）

## 🧠 工夫した点・学んだこと
state は親コンポーネントで一元管理し、
子コンポーネントへは props とコールバックでデータを受け渡す構成にしました。
配列操作（map / filter）を用いて、追加・削除・完了管理を実装しました。
表示順の制御は state を直接変更せず、表示用の配列を作成して対応しました。
useEffect を用いて localStorage との同期を行い、データの永続化を実現しました。
