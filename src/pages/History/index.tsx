import { HistoryContainer, HistoryList } from "./styles";

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Atividade a ser realizada</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Atividade a ser realizada</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Atividade a ser realizada</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Atividade a ser realizada</td>
              <td>20 minutos</td>
              <td>Há 2 semanas</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
