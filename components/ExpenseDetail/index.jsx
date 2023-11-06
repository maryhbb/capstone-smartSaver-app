import DeleteButton from "../DeleteButton";
import { StyledLink } from "@/design-system/StyledLink";
import { StyledGrid } from "@/design-system/StyledGrid";
import { StyledGridItem } from "@/design-system/StyledGridItem";
import { Icon } from "@iconify/react";
import { StyledCard } from "@/design-system/StyledCard";
import { StyledIconButton } from "@/design-system/StyledIconButton";
import { StyledIconGroup } from "@/design-system/StyledIconGroup";
import { StyledTitle } from "@/design-system/StyledTitle";
import { StyledText } from "@/design-system/StyledText";

function ExpenseDetail({ expense = {}, handleDelete }) {
  if (!expense._id || typeof expense._id !== "string") {
    return <h2>Something went wrong</h2>;
  }

  return (
    <StyledCard $addMarginBottom $isDetail>
      <StyledTitle>{expense.name}</StyledTitle>
      <StyledGrid>
        <StyledText $isBold>Description</StyledText>{" "}
        <StyledGridItem> {expense.description}</StyledGridItem>
        <StyledText $isBold>Category</StyledText>{" "}
        <StyledGridItem> {expense.categoryId[0].name}</StyledGridItem>
        <StyledText $isBold>Amount</StyledText>{" "}
        <StyledGridItem> {expense.amount} €</StyledGridItem>
      </StyledGrid>
      <StyledIconGroup>
        <StyledLink href={`/create/${expense._id}`}>
          <StyledIconButton>
            <Icon icon="icon-park-outline:edit" width="24" />
          </StyledIconButton>
        </StyledLink>
        <DeleteButton
          expenseId={expense._id}
          handleDelete={handleDelete}
          showList={true}
          expenseName={expense.name}
        ></DeleteButton>
      </StyledIconGroup>
    </StyledCard>
  );
}

export default ExpenseDetail;