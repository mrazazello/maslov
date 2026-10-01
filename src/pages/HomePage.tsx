import { BlocksContainer } from "../common/BlocksContainer/BlocksContainer"
import { FeaturesList } from "../common/Feature/FeaturesList"
import { LogosList } from "../common/LogosList/LogosList"
import { PageIntro } from "../common/PageIntro/PageIntro"

export const HomePage = () => {
  return(
    <BlocksContainer align="center">
      <PageIntro 
        title="Покупаем проблемные долги и дебиторскую задолженность по всей России" 
        subtitle="Быстро оцениваем и выкупаем просроченные долги. Работаем конфиденциально, 
        платим справедливую цену." 
        showButton={true} 
      />
      <FeaturesList />
      <LogosList />
    </BlocksContainer>
  )
}
