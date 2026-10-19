import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/chrome";

export const Route = createFileRoute("/hi/donate")({
  component: DonateHi,
  head: () => ({
    meta: [
      {
        title: "सहयोग करें — India in Reality",
        description:
          "India in Reality एक मुफ़्त, ग़ैर-व्यावसायिक साइड प्रोजेक्ट है। आपका सहयोग डोमेन, सर्वर और रिसर्च के खर्च में मदद करता है।",
      },
    ],
  }),
});

function DonateHi() {
  return (
    <>
      <Header lang="hi" />
      <main className="mx-auto max-w-4xl px-5 py-14">
        <p className="kicker">सहयोग</p>
        <h1 className="mt-2 font-serif text-4xl">इसे मुफ़्त रखने में मदद कीजिए</h1>
        <div className="prose-block mt-6 max-w-2xl text-[1.02rem] text-ink-soft">
          <p>
            India in Reality एक साइड प्रोजेक्ट है — एक इंसान, AI की मदद से, शाम-रात के
            घंटों में रिसर्च करके लिखता है। यहाँ सब कुछ मुफ़्त है: न कोई पेवॉल, न
            विज्ञापन, न कोई 'स्पॉन्सर्ड' रैंकिंग — और आगे भी कभी नहीं होगा।
          </p>
          <p>
            पर इसे चलाने में असली खर्च आता है: डोमेन, होस्टिंग, और हर आँकड़े के पीछे की
            रिसर्च। अगर यह साइट काम की लगी हो, तो इन खर्चों के लिए छोटा-सा सहयोग सचमुच
            मदद करेगा — और इसे स्वतंत्र रखेगा, क्योंकि तब इसे विज्ञापनदार नहीं, पाठक
            चलाएँगे।
          </p>
        </div>

        <div className="chart-frame mt-8 max-w-xl p-6">
          <p className="kicker">UPI — सबसे आसान तरीका</p>
          <p className="mt-2 text-sm text-ink-soft">
            किसी भी UPI ऐप से स्कैन कीजिए, या इसी ID पर भेजिए:
          </p>
          <p className="mt-3 rounded-md bg-paper-2 px-4 py-3 font-mono text-lg font-semibold tracking-wide text-ink">
            probirsarkarjio@ybl
          </p>
        </div>

        <div className="prose-block mt-8 max-w-2xl text-[0.98rem] text-ink-soft">
          <p>
            भारत के बाहर से?{" "}
            <a
              className="text-saffron underline"
              href="https://github.com/sponsors/probir-sarkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Sponsors
            </a>{" "}
            किसी भी कार्ड से चलता है, या{" "}
            <a className="underline" href="mailto:me@probirsarkar.com">me@probirsarkar.com</a> पर लिखिए —
            कोई न कोई रास्ता निकल आएगा।
          </p>
          <p className="text-sm">
            पैसा कहाँ जाता है: डोमेन और DNS (~₹2,000/साल), Cloudflare पर होस्टिंग, और
            रिसर्च का समय। अगर सहयोग खर्च से ज़्यादा हो जाए, तो वह साइट को और लंबे समय
            तक चलाने में लगेगा — यह व्यापार नहीं है, और बनेगा भी नहीं। इस साइट पर कुछ
            भी स्पॉन्सर्ड नहीं है, और किसी दानदाता का लिखे जाने पर कोई असर नहीं होता।
          </p>
        </div>
      </main>
      <Footer lang="hi" />
    </>
  );
}
