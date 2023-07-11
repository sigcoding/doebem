const CriteriaItems = ({ title, description }: string) => {
  return (
    <div className="max-w-xs">
      <h5 className="text-sm text-gray-900 font-bold text-center">{title}</h5>
      <p className="text-md text-center text-gray-700 font-medium mt-2 mb-10">{description}</p>
    </div> 
  );
}

export const Criteria = () => {
  return (
    <div className="mt-14">
      <h2 className="text-2xl font-medium tracking-tight text-gray-800">Nossos critérios</h2>
      <div className="flex flex-col sm:flex-row justify-around mt-10">
        <CriteriaItems title="Impacto" description="Buscamos evidências claras da efetividade do trabalho realizado." />
        <CriteriaItems title="Gestão" description="Avaliamos a gestão, a equipe e os processos da organização." />
        <CriteriaItems title="Transparência" description="Analisamos a transparência financeira e organizacional." />
      </div>
    </div>
  );
}
