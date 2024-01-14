import TextToSpeech from "./TextToSpeech";

const App = () => {
  const text =
    "Bu text ni o'qib beradigan dastur va oddiy bekorchilik paytida yozildi , hozir bu dasturni ochiq manbaga joylayman va kerak paytida bemalol foydalanishingiz mumkun. E'tiboringiz uchun rahmat. If i write in english all words this app work correctly and works as a perfect. thanks for your attantion";

  return (
    <div>
      <h1>Text To Speech</h1>
      <TextToSpeech text={text} />
      <p>{text}</p>
    </div>
  );
};

export default App;
