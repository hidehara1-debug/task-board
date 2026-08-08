# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## デプロイ先

https://hidehara1-debug.github.io/task-board/

`main` ブランチへ push すると `.github/workflows/deploy.yml` の GitHub Actions ワークフローが自動でビルド・デプロイする(GitHub Pages の Source は "GitHub Actions" に設定済み)。

## 技術スタック

- Vite + React(`.jsx`、TypeScriptではなくJavaScript)
- 状態管理は React の `useState`/`useEffect` のみ(外部の状態管理ライブラリは未使用)
- データ永続化は `localStorage`(`src/components/TaskBoard.jsx` の `STORAGE_KEY = 'task-board.tasks'`)。バックエンド・DBは無し
- スタイリングはプレーンCSS(`src/index.css` に全体リセット、`src/App.css` にコンポーネントのスタイル)。CSS-in-JSやCSSモジュールは未使用
- Lintは oxlint(`npm run lint`)

### コマンド

- `npm install` — 依存関係のインストール
- `npm run dev` — 開発サーバー起動(http://localhost:5173)
- `npm run build` — 本番ビルド(`dist/` に出力、GitHub Actionsが同じコマンドを実行)
- `npm run preview` — ビルド成果物をローカルでプレビュー
- `npm run lint` — oxlintによる静的チェック

## コンポーネントの命名規約

- コンポーネントは `src/components/` 配下に1コンポーネント1ファイルで配置し、ファイル名はコンポーネント名と一致させる(`TaskBoard.jsx`, `TaskForm.jsx`, `TaskItem.jsx` など)
- コンポーネント名・ファイル名は PascalCase、拡張子は `.jsx`
- 各コンポーネントは default export のみ(named exportは使わない)
- ルート要素の className はコンポーネント名を kebab-case にしたもの(例: `TaskBoard` → `task-board`)。子要素は BEM 風に `ブロック__要素`、状態は `ブロック--モディファイア` で表す(例: `task-item__label`, `task-item--completed`)
- 状態を持つコンテナは `TaskBoard` のように上位に置き、`TaskForm`/`TaskItem` のような表示・入力用の子コンポーネントには props(`task`, `onAdd`, `onToggle`, `onDelete` など)経由でデータとコールバックを渡す(props drilling。Context APIは未使用)

## Git ワークフロー(重要)

このプロジェクトでは、コードに変更を加えるたびに GitHub へ push すること。

- ファイルの追加・編集・削除などコードに変更があったら、作業の区切りごとにコミットし、リモート(GitHub)へ push する。
- 変更を溜め込んで一度に大きなコミットにしない。意味のある単位でこまめにコミット・push する。
- push 前に `git status` で意図しない変更(不要なファイル、シークレットなど)が含まれていないか確認する。
- リモートリポジトリはまだ作成されていない。最初にコードを書く前に、`git init` の実行と GitHub リポジトリの作成・`git remote add origin <URL>` の設定が必要。
- force push (`git push --force`) など破壊的な操作は、明示的な指示がない限り行わない。
