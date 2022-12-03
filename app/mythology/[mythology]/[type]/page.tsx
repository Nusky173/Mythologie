import { useRouter } from 'next/router'

export default function Type({
    params,
  }: {
    params: { mythology: string, type: string };
  }) {
    console.log(params);

    return (
        <div>
            Je suis la page {params.type} de la mythologie {params.mythology}
        </div>
    )
}