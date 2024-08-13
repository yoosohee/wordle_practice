function appStart() {
  const handlekeyboard = (Event) => {
    console.log("키가 눌렸습니다. => Event", Event);
  };
  window.addEventListener("keydown", handlekeyboard);
}

appStart();
