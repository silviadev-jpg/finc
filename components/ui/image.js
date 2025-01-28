Image.js
import Image from 'next/image';

function ImageComponent() {
  return (
    <div className="flex justify-center">
      <Image
        src="/main-image.png"
        alt="Main Image"
        height={8}
        width={8}
      />
    </div>
  );
}