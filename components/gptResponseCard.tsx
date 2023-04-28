import React, { useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.openai.com/v1/";
const MODEL = "gpt-3.5-turbo";
const API_KEY = "APIキーをここに貼り付け";

const ResponseCard = () => {
  const [responseText, setResponseText] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // かたの警告を無視する
    // @ts-ignore
    const value = e.currentTarget[0].value;
    console.log(value);
    const lambdaUrl = process.env.NEXT_PUBLIC_LAMBDA_URL!;
    const ws = new WebSocket(lambdaUrl);
    ws.addEventListener("open", () => {
      console.log("WebSocket Connection is open now.");
      const obj: RequestReport = {
        number_of_paragraphs: 3,
        text_range_minimum: 250,
        text_range_max: 250,
        instruction: value,
      };
      const sendData = JSON.stringify(obj);
      const tgt = JSON.stringify({ action: "sendMessage", data: sendData });
      console.log(tgt, typeof tgt === "string");
      ws.send(tgt);
    });
    ws.addEventListener("message", (event) => {
      setResponseText((prev) => prev + event.data);
    });
    ws.addEventListener("close", () => {
      console.log("WebSocket Connection is closed now.");
    });
  };
  return (
    <div>
      <h2>gptResponseCard</h2>
      <p>response content</p>
      <div>content</div>
      {responseText ? (
        responseText
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit">送信</button>
        </form>
      )}
    </div>
  );
};

export default ResponseCard;

type RequestReport = {
  number_of_paragraphs: number;
  text_range_minimum: number;
  text_range_max: number;
  instruction: string;
};
