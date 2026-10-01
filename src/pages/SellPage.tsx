import { BlocksContainer } from "../common/BlocksContainer/BlocksContainer"
import { PageIntro } from "../common/PageIntro/PageIntro"
import { SellContent } from "../common/SellContent/SellContent"

export const SellPage = () => {
  return(
    <BlocksContainer>
      <PageIntro 
        title="Зачем продавать долги?" 
        showButton={true} 
        isNarrow={true}
      />

      <SellContent />
    </BlocksContainer>
  )
}
