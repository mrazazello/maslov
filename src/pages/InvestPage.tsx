import { BlocksContainer } from "../common/BlocksContainer/BlocksContainer"
import { IconsCard } from "../common/IconsCard/IconsCard"
import { PageIntro } from "../common/PageIntro/PageIntro"
import { StepsList } from "../common/Steps/StepsList"

export const InvestPage = () => {
  return(
    <BlocksContainer>
      <PageIntro 
        title="Инвестируем в проблемные долги. Создаем результат" 
        subtitle="Выкупаем право требования долга, дебиторскую задолженность, исполнительные листы и портфели долгов по всей России" 
        showButton={true} 
        isNarrow={true}
      />
      <StepsList />
      <IconsCard />
    </BlocksContainer>
  )
}
