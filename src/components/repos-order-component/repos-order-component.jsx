import * as S from "./repos-order.styled"

export const ReposOrderComponent = ({
  setReposOrder,
  setChosenButton,
  chosenButton,
}) => {
  return (
    <S.OrderDiv>
      <S.OrderTitle>Сортировать по количеству репозиториев:</S.OrderTitle>
      <S.OrderButton
        onClick={() => {
          setReposOrder("desc")
          setChosenButton("по убыванию")
        }}
        chosen={chosenButton === "по убыванию"}
      >
        по убыванию
      </S.OrderButton>
      <S.OrderButton
        onClick={() => {
          setReposOrder("asc")
          setChosenButton("по возрастанию")
        }}
        chosen={chosenButton === "по возрастанию"}
      >
        по возрастанию
      </S.OrderButton>
    </S.OrderDiv>
  )
}
