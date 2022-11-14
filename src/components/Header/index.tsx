import { HeaderContainer, LogoBox } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={'/headerEffectRight.svg'} className="effectRight" />
      <img src={'/headerEffectLeft.svg'} className="effectLeft" />
      <div className="lightRight" />
      <div className="lightLeft" />
      <div className="rectangle" />
      <LogoBox>
        <img src="/Logo.svg" alt="logo" className="logo" />
        <h1>GITHUB BLOG</h1>
      </LogoBox>
    </HeaderContainer>
  )
}