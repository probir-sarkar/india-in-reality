import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/chrome";
import { tr } from "@/i18n/config";

export const Route = createFileRoute("/hi/about")({
  component: AboutHi,
  head: () => ({
    meta: [
      {
        title: "परिचय — India in Reality",
        description: "यह साइट क्यों है, कैसे काम करती है, और क्या नहीं करती।",
      },
    ],
  }),
});

function AboutHi() {
  const t = tr("hi");
  return (
    <>
      <Header lang="hi" />
      <main className="mx-auto max-w-4xl px-5 py-14">
        <p className="kicker">परिचय</p>
        <h1 className="mt-2 font-serif text-4xl">{t.aboutTitle}</h1>
        <div className="prose-block mt-6 max-w-2xl text-[1.02rem] text-ink-soft">
          <p>
            मैं दुनिया के किसी भी देश से ज़्यादा भारत से प्यार करता हूँ। इसीलिए मैं भारत
            के बारे में और जानना चाहता हूँ — अच्छा और बुरा, आँकड़े और उनके पीछे के लोग —
            और इसीलिए जो कुछ मैं जानता हूँ, वह उन सबके साथ बाँटना चाहता हूँ जिन्हें यही
            लगाव है।
          </p>
          <p>
            भारत की रैंकिंग होती है, बहुत होती है। कई साल वह भूख, प्रेस की आज़ादी, हवा की
            गुणवत्ता या लोकतंत्र के सूचकांकों में नीचे पहुँचती है; कई साल सरकार पूरी
            प्रक्रिया को ही खारिज कर देती है। खारिजी को आमतौर पर एक झगड़े की तरह दिखाया
            जाता है, और रैंकिंग को सच्चाई की तरह। दोनों रवैये पाठक की मदद नहीं करते।
          </p>
          <p>
            यह साइट हर सूचकांक को उतनी ही गंभीरता से लेती है कि उसे समझा सके: कौन बनाता
            है, किन आधारों पर, वह क्या देख सकता है और क्या नहीं, और उसकी पद्धति कहाँ
            टूटती है। फिर भारत सरकार का जवाब पूरी तरह देती है — क्योंकि खारिजी कभी
            पक्षपाती शोर होती है और कभी सच्ची पद्धतिगत आपत्ति, और पाठक हक़ रखता है कि
            उसे पता चले कौन-सी है।
          </p>
          <p>
            नियम सीधे हैं। हर आंकड़े के साथ एक सार्वजनिक स्रोत है। स्रोत खुले हैं, कोई
            भी जाँच सकता है — पर मैं अकेला व्यक्ति हूँ, AI की मदद से काम करता हूँ, और हर
            स्रोत की स्वतंत्र जाँच नहीं हो पाई है। कोई ग़लती मिले तो लिखिए, मैं ठीक
            करूँगा: <a className="underline" href="mailto:me@probirsarkar.com">me@probirsarkar.com</a> या{" "}
            <a className="underline" href="https://www.linkedin.com/in/probir-sarkar" target="_blank" rel="noopener noreferrer">
              LinkedIn पर
            </a>।
          </p>
          <p>
            यह एक साइड प्रोजेक्ट है, कोई व्यापार नहीं — न कोई प्रोडक्ट, न पेवॉल, न
            विज्ञापन, और आगे भी कभी नहीं होगा। अगर यह साइट काम की लगे, तो आप{" "}
            <a className="underline text-saffron" href="/hi/donate">डोमेन, सर्वर और रिसर्च के खर्च</a>{" "}
            में मदद कर सकते हैं।
          </p>
        </div>
      </main>
      <Footer lang="hi" />
    </>
  );
}
