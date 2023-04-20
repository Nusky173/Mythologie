export default function Personality({
    params,
  }: {
    params: { mythology: string, type: string, personality: string };
  }) {

    return (
        <div>
            Je suis la page de {params.personality} le {params.type} {params.mythology}
        </div>
    )
}