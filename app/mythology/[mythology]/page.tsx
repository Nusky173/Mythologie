export default function Mythology({
    params,
  }: {
    params: { mythology: string };
  }) {
    console.log(params);

    return (
        <div>
            Je suis la page de la mythologie {params.mythology}
        </div>
    )
}