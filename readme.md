# 專案執行

1. `npm i` 安裝依賴套件
2. `npm run dev` 啟動開發環境
3. `npm run build` 產出發布檔案

# 使用套件

- react, react-dom: react 框架
- styled-components: react 的 style 工具
- babel: javascript compoler
- webpack: 前端檔案打包工具

# 檔案結構說明

- `components/CustomInputNumber` : 需求中的 CustomInputNumber 元件
- `components/Room` : 房間的元件
- `pages/RoomAllocation`: 房間分配頁面

# 說明

1. 當人數選擇有錯誤時將在畫面上會顯示提示。因為如果讓使用者不能選擇會造成困惑

   - 人數過多，上限 xxx
   - 最少要有 1 位大人

2. 加減按鈕長按尚未實作
