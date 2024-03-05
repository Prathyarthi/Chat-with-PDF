import { BrainCogIcon, EyeIcon, GlobeIcon, MonitorSmartphoneIcon, ServerCogIcon, ZapIcon } from "lucide-react";

const features = [
  {
    name: "Store your PDF Documents",
    description: "Keep all your important PDF files securely stored in one place.",
    icon:GlobeIcon
  },
  {
    name: "Blazing Fast Responses",
    description: "Experience lightning fast responses to your queries, ensuring you get the information you need.",
    icon:ZapIcon
  },
  {
    name: "Chat Memorisation",
    description: "Our intelligent chatbot remembers previous interactions, providing you with a personalized experience.",
    icon:BrainCogIcon
  },
  {
    name: "Interactive PDF Viewer",
    description: "Engage with your PDFs like never before using our intuitive and interactive PDF viewer.",
    icon:EyeIcon
  },
  {
    name: "Cloud Backup",
    description: "Rest assured knowing your documents are safely up on the cloud, protected from loss or damage.",
    icon:ServerCogIcon
  },
  {
    name: "Responsive Across Devices",
    description: "Access and chat with your PDFs seamlessly on any device, whether it's your laptop, desktop, or mobile.",
    icon:MonitorSmartphoneIcon
  },
]

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center border mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">

          </div>
        </div>
</div>
    </main>
  );
}
