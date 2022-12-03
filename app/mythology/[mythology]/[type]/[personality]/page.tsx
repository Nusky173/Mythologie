export default function Personality({
    params,
  }: {
    params: { mythology: string, type: string, personality: string };
  }) {
    console.log(params);

    return (
        <div>
            Je suis la page de {params.personality} le {params.type} {params.mythology}
        </div>
    )
}