import Image from "next/image";
import { Inter } from "next/font/google";
import { ProductProps } from "@/types/product";

const inter = Inter({ subsets: ["latin"] });
import { formatCurrency, truncate } from "../../helpers";

export default function ProductCard({
  id,
  name,
  imageUrl,
  price,
  handleDelete = () => Promise.resolve(),
}: ProductProps & { handleDelete: (productId: string) => Promise<void> }) {
  return (
    <>
      <div className="bg-white rounded-lg max-w-[248px] px-4 pb-2 pt-10 relative">
        {/* <button
          onClick={() => handleDelete(id)}
          className="p-2 rounded-full bg-red-600 absolute right-4 top-4 hover:opacity-60"
        >
          <Image
            src="x.svg"
            alt={`Excluir produto ${name} `}
            width={20}
            height={20}
          />
        </button> */}

        <Image
          src={imageUrl}
          alt={`Imagem do produto ${name} `}
          width={250}
          height={250}
          title={`Imagem do produto ${name}`}
        />
        <h2
          className={`${inter.className} text-black text-md font-semibold mt-4`}
        >
          {truncate(name, 30)}
        </h2>
        <h3
          className={`${inter.className} text-blue-500 text-md font-bold mt-4`}
        >
          {formatCurrency(price)}
        </h3>
      </div>
    </>
  );
}
