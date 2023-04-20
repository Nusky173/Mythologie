export default function Mythology({
    params,
  }: {
    params: { mythology: string };
  }) {

    return (
        <div>
            Je suis la page de la mythologie {params.mythology}
        </div>
    )
}