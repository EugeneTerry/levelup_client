import styled from "styled-components";

export const Wrapper=styled.body`
  background:#EFEEEB;

  gen_button {
    background-color:#009A9C;
    color: #404040;
    border-radius: 999px;
    box-shadow: #5E5DF0 0 10px 20px -10px;
    box-sizing: border-box;
    font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
    font-size: 12px;
    font-weight: 700;
    line-height: 24px;
    opacity: 1;
    outline: 0 solid transparent;
    padding: 5px 10px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: fit-content;
    word-break: break-word;
    border: 0;
    margin: 1em;
    }

  .component-wrapper {
    padding: 10px;

    h2{
      font-family: 'Lora', serif;
      }
    }

  .games {
    border: 4px solid #009A9C;
    margin: 1em 1em;
    padding: .5em .5em;
    width: 300px;
    display:flexbox;
    flex-wrap: wrap;
    align-content:flex-start;
    
  }
  .gamesDivList {
    margin: 2;
    display: flex;
    flex-wrap: wrap;
  }
  `