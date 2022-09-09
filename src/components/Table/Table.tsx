import styles from './Table.module.scss';

const { table } = styles;


type tableProps = {
  entities: any[],
};

export default function Table({ entities }: tableProps) {
  return (
    <>
      {entities.length > 0 &&
        <table className={table}>
          <thead>
            <tr>
              {Object.keys(entities[0]).map((header: string) => {
                return <th scope="col">{header}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {entities.map((entity: any, index: number) => {
              return (
                <tr key={index}>
                  {
                    Object.values(entity).map((value: any, index: number) => {
                      return <td key={value}>{value}</td>
                    })
                  }
                </tr>
              );
            })}
          </tbody>
        </table>}
    </>
  )
}
