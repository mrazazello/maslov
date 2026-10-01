import { BlocksContainer } from "../common/BlocksContainer/BlocksContainer"
import { CasesList } from "../common/casesList/CasesList"
import { PageIntro } from "../common/PageIntro/PageIntro"

export const CasesPage = () => {
  return  (<BlocksContainer>
  <PageIntro 
    title="Продайте долг на выгодных условиях" 
    subtitle="Оставьте информацию о долге, мы свяжемся с вами в течение одного-двух часов" 
    showButton={true} 
    isNarrow={true}
  />
  <CasesList />
</BlocksContainer>
  )
}
