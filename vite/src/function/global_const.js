function global_const() {
  const url_local = "http://127.0.0.1:5000";
  const url_custom = "http://192.168.1.8:5000";

  return { url_custom, url_local };
}

export default global_const;
