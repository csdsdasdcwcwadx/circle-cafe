interface Window {
    FB?: any; // 告诉 TypeScript window.FB 可能存在，并且类型是任意的
    fbAsyncInit?: Function;
  }