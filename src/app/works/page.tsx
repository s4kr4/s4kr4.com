import Image from "next/image";

export default function Works() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Works</h2>

      <div className="max-w-2xl mx-auto">
        <h3 className="text-xl font-semibold mb-4 text-center">s4kr4.com</h3>

        <div className="mb-6">
          <Image
            src="/images/s4kr4-com.png"
            alt="s4kr4.com screenshot"
            width={800}
            height={450}
            className="mx-auto border border-gray-700"
          />
        </div>
      </div>
    </div>
  );
}
