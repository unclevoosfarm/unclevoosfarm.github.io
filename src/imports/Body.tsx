import svgPaths from "./svg-3ykeeib9ga";
import imgStunningFarmLandscape from "figma:asset/0a28f452b2853de1494470dfce4fa4d85bde710f.png";
import imgFreshBroccoli from "figma:asset/9ec9f88a7f982319e09485586fc096dd1cbb261f.png";
import imgSweetPineapple from "figma:asset/13acdfb3fbfdcefb5a0bf57fe39abb22aff11e41.png";
import imgRipePapaya from "figma:asset/854d0c710092260ab5d5021b019c5e7f26ac9520.png";
import imgUncleVooLogo from "figma:asset/cb5dc8b84ac691d7e07dc175536e4409b1ab3617.png";

function StunningFarmLandscape() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Stunning Farm Landscape">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-138.44%] max-w-none top-0 w-[376.87%]" src={imgStunningFarmLandscape} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Container">
      <StunningFarmLandscape />
      <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" data-name="Overlay" />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[11.328px] relative shrink-0 w-[11.33px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3303 11.3282">
        <g id="Container">
          <path d={svgPaths.p1e0bf800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-[8px] relative">
        <Container2 />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.2)] content-stretch flex items-center px-[17px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Margin />
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white w-[203.91px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`100% Organic & Family Owned`}</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute h-[12px] left-0 top-[64.5px] w-[331.78px]" data-name="SVG">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 331.78 12">
        <g clipPath="url(#clip0_2_498)" id="SVG">
          <path d={svgPaths.p10074760} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeWidth="11.7534" />
        </g>
        <defs>
          <clipPath id="clip0_2_498">
            <rect fill="white" height="12" width="331.78" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-start justify-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[72px] justify-center leading-[0] relative shrink-0 text-[#f97316] text-[72px] text-center w-[331.78px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[72px] whitespace-pre-wrap">Good Life.</p>
      </div>
      <Svg />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[72px] justify-center leading-[0] relative shrink-0 text-[72px] text-center text-white w-[509.34px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[72px] whitespace-pre-wrap">Welcome to the</p>
      </div>
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[96px] justify-center leading-[32px] relative shrink-0 text-[#e5e7eb] text-[24px] text-center w-[645.08px] whitespace-pre-wrap">
        <p className="mb-0">{`Escape the city and breathe in the fresh air at Uncle Voo's.`}</p>
        <p className="mb-0">Hand-picked harvest, cozy farm stays, and smiles</p>
        <p>guaranteed.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
        <g id="Container">
          <path d={svgPaths.p22ebd2c0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#f97316] content-stretch flex gap-[7.99px] items-center justify-center mr-[-0.01px] px-[32px] py-[16px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-[0_-0.03px_0_0] rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(249,115,22,0.3),0px_4px_6px_-4px_rgba(249,115,22,0.3)]" data-name="Link:shadow" />
      <Container6 />
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white w-[123.25px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">Book Your Stay</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[19px] relative shrink-0 w-[21.976px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9758 19">
        <g id="Container">
          <path d={svgPaths.p345cae00} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center justify-center px-[34px] py-[18px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container7 />
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white w-[108.41px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">View Harvest</p>
      </div>
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[16px] relative shrink-0" data-name="Link:margin">
      <Link1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[0.01px] pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <LinkMargin />
    </div>
  );
}

function Container10() {
  return (
    <div className="mr-[-0.01px] relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#d1d5db] text-[16px] text-center w-[88.84px]">
        <p className="leading-[24px] whitespace-pre-wrap">Pet Friendly</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[8px] relative shrink-0" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0" data-name="Container">
      <Container10 />
      <Margin1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="mr-[-0.01px] relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p1caa9380} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#d1d5db] text-[16px] text-center w-[119.02px]">
        <p className="leading-[24px] whitespace-pre-wrap">Fresh Breakfast</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-0.01px] pl-[8px] relative shrink-0" data-name="Margin">
      <Container14 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0" data-name="Container">
      <Container13 />
      <Margin3 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Margin">
      <Container12 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[24px] relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Margin2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[896px] px-[32px] relative shrink-0" data-name="Container">
      <OverlayBorderOverlayBlur />
      <Heading />
      <Container4 />
      <Container5 />
      <Container8 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex h-[4824px] items-center justify-center left-0 min-h-[600px] overflow-clip right-0 top-[97px]" data-name="Section">
      <Container />
      <Container1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col font-bold gap-[8px] items-start leading-[0] relative shrink-0" data-name="Paragraph">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] h-[20px] justify-center relative shrink-0 text-[#f97316] text-[14px] tracking-[0.7px] uppercase w-[192.25px]">
        <p className="leading-[20px] whitespace-pre-wrap">Straight from the soil</p>
      </div>
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] h-[40px] justify-center relative shrink-0 text-[#111827] text-[36px] w-[228.11px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[40px] whitespace-pre-wrap">Fresh Harvest</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[16px] mr-[-0.01px] relative shrink-0 w-[20px]" data-name="Margin">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Margin">
          <path d={svgPaths.p29a30900} fill="var(--fill-0, #3B82F6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center pr-[0.01px] relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] mr-[-0.01px] relative shrink-0 text-[#3b82f6] text-[16px] w-[125.08px]">
        <p className="leading-[24px] whitespace-pre-wrap">See All Products</p>
      </div>
      <Margin4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Link2 />
    </div>
  );
}

function FreshBroccoli() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Fresh Broccoli">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[149.22%] left-0 max-w-none top-[-24.61%] w-full" src={imgFreshBroccoli} />
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-center px-[12px] py-[4px] right-[16px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[16px]" data-name="Background+Shadow">
      <div className="bg-[#22c55e] rounded-[9999px] shrink-0 size-[8px]" data-name="Background" />
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[12px] w-[56.08px]">
        <p className="leading-[16px] whitespace-pre-wrap">In Season</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f0fdf4] h-[256px] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <FreshBroccoli />
        <BackgroundShadow />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[107.31px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[28px] justify-center left-0 text-[#f97316] text-[20px] top-[13.5px] w-[83.77px]">
        <p className="leading-[28px] whitespace-pre-wrap">RM 15.00</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center left-[83.76px] text-[#6b7280] text-[14px] top-[16px] w-[23.55px]">
        <p className="leading-[20px] whitespace-pre-wrap">/kg</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[32px] justify-center relative shrink-0 text-[#111827] text-[24px] w-[178.95px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px] whitespace-pre-wrap">Organic Broccoli</p>
      </div>
      <Paragraph1 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Crisp, green, and pesticide-free. Perfect for stir-fries</p>
        <p>or steaming.</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[19px] relative shrink-0 w-[21.976px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9758 19">
        <g id="Container">
          <path d={svgPaths.p345cae00} fill="var(--fill-0, #111827)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex gap-[8px] items-center justify-center py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <Container21 />
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#111827] text-[16px] text-center w-[89.3px]">
        <p className="leading-[24px] whitespace-pre-wrap">Add to Cart</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin5 />
        <Margin6 />
        <Button />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[48px] self-stretch" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background />
        <Container18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function SweetPineapple() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Sweet Pineapple">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[149.22%] left-0 max-w-none top-[-24.61%] w-full" src={imgSweetPineapple} />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[9.5px] relative shrink-0 w-[10px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9.5">
        <g id="Container">
          <path d={svgPaths.pc98bac0} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="absolute bg-[#f97316] content-stretch flex gap-[4px] items-center px-[12px] py-[4px] right-[16px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[16px]" data-name="Background+Shadow">
      <Container22 />
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[16px] justify-center leading-[0] relative shrink-0 text-[12px] text-white w-[61.88px]">
        <p className="leading-[16px] whitespace-pre-wrap">Best Seller</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#fefce8] h-[256px] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <SweetPineapple />
        <BackgroundShadow1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[111.08px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[28px] justify-center left-0 text-[#f97316] text-[20px] top-[13.5px] w-[88.03px]">
        <p className="leading-[28px] whitespace-pre-wrap">RM 22.00</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center left-[88.03px] text-[#6b7280] text-[14px] top-[16px] w-[23.05px]">
        <p className="leading-[20px] whitespace-pre-wrap">/pc</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between leading-[0] relative w-full">
        <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[32px] justify-center relative shrink-0 text-[#111827] text-[24px] w-[180.06px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[32px] whitespace-pre-wrap">Honey Pineapple</p>
        </div>
        <Paragraph2 />
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container24 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`Uncle Voo's famous sweet pineapples. Juicy and`}</p>
        <p>golden.</p>
      </div>
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[19px] relative shrink-0 w-[21.976px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9758 19">
        <g id="Container">
          <path d={svgPaths.p345cae00} fill="var(--fill-0, #111827)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex gap-[8px] items-center justify-center py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <Container26 />
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#111827] text-[16px] text-center w-[89.3px]">
        <p className="leading-[24px] whitespace-pre-wrap">Add to Cart</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin7 />
        <Margin8 />
        <Button1 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[48px] self-stretch" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background1 />
        <Container23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function RipePapaya() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Ripe Papaya">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[149.22%] left-0 max-w-none top-[-24.61%] w-full" src={imgRipePapaya} />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#fff7ed] h-[256px] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[inherit] size-full">
        <RipePapaya />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[106.8px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[28px] justify-center left-0 text-[#f97316] text-[20px] top-[13.5px] w-[83.25px]">
        <p className="leading-[28px] whitespace-pre-wrap">RM 18.50</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center left-[83.25px] text-[#6b7280] text-[14px] top-[16px] w-[23.55px]">
        <p className="leading-[20px] whitespace-pre-wrap">/kg</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-start justify-between leading-[0] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[32px] justify-center relative shrink-0 text-[#111827] text-[24px] w-[186.06px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px] whitespace-pre-wrap">Red Lady Papaya</p>
      </div>
      <Paragraph3 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Margin">
      <Container28 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] w-full whitespace-pre-wrap">
        <p className="mb-0">Rich in vitamins and flavor. Great for breakfast or</p>
        <p>salads.</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[24px] relative shrink-0 w-full" data-name="Margin">
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[19px] relative shrink-0 w-[21.976px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9758 19">
        <g id="Container">
          <path d={svgPaths.p345cae00} fill="var(--fill-0, #111827)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex gap-[8px] items-center justify-center py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <Container30 />
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#111827] text-[16px] text-center w-[89.3px]">
        <p className="leading-[24px] whitespace-pre-wrap">Add to Cart</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Margin9 />
        <Margin10 />
        <Button2 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[48px] self-stretch" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background2 />
        <Container27 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[32px] relative w-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#fffcf5] content-stretch flex flex-col items-start left-0 py-[96px] right-0 top-[6089px]" data-name="Section">
      <Container15 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] relative shrink-0 text-[#111827] text-[36px] text-center w-[235.2px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[40px] whitespace-pre-wrap">Guest Reviews</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] pt-[8px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#4b5563] text-[16px] text-center w-[391.44px]">
        <p className="leading-[24px] whitespace-pre-wrap">What our happy visitors have to say about their stay.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[#f97316] text-[14px] text-center tracking-[0.7px] uppercase w-[107.56px]">
        <p className="leading-[20px] whitespace-pre-wrap">Testimonials</p>
      </div>
      <Heading1 />
      <Container33 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container36 />
        <Container37 />
        <Container38 />
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#374151] text-[16px] w-full whitespace-pre-wrap">
          <p className="mb-0">{`"Absolutely magical! The kids loved`}</p>
          <p className="mb-0">feeding the goats and the cabin was so</p>
          <p className="mb-0">cozy. We will definitely be back next</p>
          <p>{`summer."`}</p>
        </div>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(249,115,22,0.2)] content-stretch flex items-center justify-center pb-[10.5px] pt-[9.5px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#f97316] text-[20px] text-center w-[11.95px]">
        <p className="leading-[28px] whitespace-pre-wrap">S</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#111827] text-[16px] w-[108.2px]">
        <p className="leading-[24px] whitespace-pre-wrap">Sarah Jenkins</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-[71.17px]">
        <p className="leading-[20px] whitespace-pre-wrap">Family Trip</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <Container44 />
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pt-[8px] relative w-full">
        <Overlay />
        <Container43 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#fffcf5] flex-[1_0_0] min-h-px min-w-px relative rounded-[48px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[33px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[48px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Container35 />
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container46 />
        <Container47 />
        <Container48 />
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#374151] text-[16px] w-full whitespace-pre-wrap">
          <p className="mb-0">{`"The freshest produce I've ever tasted. I`}</p>
          <p className="mb-0">bought a box of vegetables to take home</p>
          <p className="mb-0">and they were delicious. Highly</p>
          <p>{`recommend!"`}</p>
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(59,130,246,0.2)] content-stretch flex items-center justify-center pb-[10.5px] pt-[9.5px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#3b82f6] text-[20px] text-center w-[16.39px]">
        <p className="leading-[28px] whitespace-pre-wrap">M</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#111827] text-[16px] w-[90.88px]">
        <p className="leading-[24px] whitespace-pre-wrap">Michael Tan</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-[70.72px]">
        <p className="leading-[20px] whitespace-pre-wrap">Day Visitor</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading4 />
      <Container54 />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pt-[8px] relative w-full">
        <Overlay1 />
        <Container53 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#fffcf5] flex-[1_0_0] min-h-px min-w-px relative rounded-[48px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[33px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[48px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Container45 />
        <Container51 />
        <Container52 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="h-[19px] relative shrink-0 w-[20px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 19">
          <path d={svgPaths.p3e30af00} fill="var(--fill-0, #FACC15)" id="Icon" />
        </svg>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <Container56 />
        <Container57 />
        <Container58 />
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#374151] text-[16px] w-full whitespace-pre-wrap">
          <p className="mb-0">{`"A perfect escape from the city. The wifi`}</p>
          <p className="mb-0">was surprisingly good, so I could work a bit</p>
          <p>{`while enjoying the nature views."`}</p>
        </div>
      </div>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(34,197,94,0.2)] content-stretch flex items-center justify-center pb-[10.5px] pt-[9.5px] relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#22c55e] text-[20px] text-center w-[11.05px]">
        <p className="leading-[28px] whitespace-pre-wrap">J</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#111827] text-[16px] w-[88.2px]">
        <p className="leading-[24px] whitespace-pre-wrap">Jessica Lee</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[14px] w-[93.45px]">
        <p className="leading-[20px] whitespace-pre-wrap">Digital Nomad</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Heading5 />
      <Container64 />
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pt-[8px] relative w-full">
        <Overlay2 />
        <Container63 />
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#fffcf5] flex-[1_0_0] min-h-px min-w-px relative rounded-[48px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[33px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[48px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Container55 />
        <Container61 />
        <Container62 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[32px] relative w-full">
        <Container32 />
        <Container34 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 max-w-[1280px] py-[80px] right-0 rounded-[48px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[6887px]" data-name="Section">
      <Container31 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[30px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[36px] whitespace-pre-wrap">Get in touch</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Name</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">Your name</p>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[15px] relative w-full">
          <Container67 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Email</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[normal] whitespace-pre-wrap">you@example.com</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center px-[17px] py-[15px] relative w-full">
          <Container69 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Input1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Label">
      <div className="flex flex-col font-['Quicksand:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">Message</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-full">
          <p className="leading-[24px] whitespace-pre-wrap">How can we help you?</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white relative rounded-[24px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[85px] pt-[13px] px-[17px] relative w-full">
          <Container71 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Textarea />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#f97316] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_10px_15px_-3px_#fed7aa,0px_4px_6px_-4px_#fed7aa]" data-name="Button:shadow" />
          <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[110.53px]">
            <p className="leading-[24px] whitespace-pre-wrap">Send Message</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Form">
      <Container66 />
      <Container68 />
      <Container70 />
      <Button3 />
    </div>
  );
}

function Container65() {
  return (
    <div className="relative self-stretch shrink-0 w-[498px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start p-[40px] relative size-full">
        <Heading2 />
        <Form />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[24px] text-white w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px] whitespace-pre-wrap">Visit Us</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-90 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[26px] relative shrink-0 text-[16px] text-white w-full whitespace-pre-wrap">
        <p className="mb-0">Come say hi to Uncle Voo and the</p>
        <p>animals. We love visitors!</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-[163.84px]" data-name="Margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[46px] justify-center leading-[22.75px] left-[16px] opacity-90 text-[14px] text-white top-[22.38px] w-[147.84px] whitespace-pre-wrap">
        <p className="mb-0">123 Green Valley Road,</p>
        <p>Sunshine District, 54321</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Icon">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
          <path d={svgPaths.p1869180} fill="var(--fill-0, white)" id="Icon" opacity="0.8" />
        </svg>
      </div>
      <Margin11 />
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container" opacity="0.8">
          <path d={svgPaths.p143e1930} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] opacity-90 relative shrink-0 text-[14px] text-white w-[102.31px]">
        <p className="leading-[20px] whitespace-pre-wrap">+60 12-345 6789</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container77 />
      <Margin12 />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container" opacity="0.8">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] opacity-90 relative shrink-0 text-[14px] text-white w-[165.41px]">
        <p className="leading-[20px] whitespace-pre-wrap">hello@unclevoofarm.com</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Margin13 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Container75 />
      <Container76 />
      <Container78 />
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Container73 />
      <Container74 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[17.05px]">
        <p className="leading-[20px] whitespace-pre-wrap">FB</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Container81 />
    </div>
  );
}

function Container82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[13.61px]">
        <p className="leading-[20px] whitespace-pre-wrap">IG</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Container82 />
    </div>
  );
}

function LinkMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start pl-[16px] relative shrink-0 w-[56px]" data-name="Link:margin">
      <Link4 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[22.11px]">
        <p className="leading-[20px] whitespace-pre-wrap">TW</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Link">
      <Container83 />
    </div>
  );
}

function LinkMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start pl-[16px] relative shrink-0 w-[56px]" data-name="Link:margin">
      <Link5 />
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Container">
      <Link3 />
      <LinkMargin1 />
      <LinkMargin2 />
    </div>
  );
}

function Margin14() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[48px] relative shrink-0 w-full" data-name="Margin">
      <Container80 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#3b82f6] relative self-stretch shrink-0 w-[332px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-between overflow-clip p-[40px] relative rounded-[inherit] size-full">
        <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[20px] bottom-[-40px] right-[-40px] rounded-[9999px] size-[160px]" data-name="Overlay+Blur" />
        <div className="absolute bg-[rgba(255,255,255,0.1)] blur-[12px] left-[-40px] rounded-[9999px] size-[80px] top-[40px]" data-name="Overlay+Blur" />
        <Container72 />
        <Margin14 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white relative rounded-[40px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div className="content-stretch flex items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Container65 />
        <Background3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[40px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[rgba(59,130,246,0.05)] content-stretch flex flex-col items-start left-0 px-[224px] py-[80px] right-0 top-[7525px]" data-name="Section">
      <BackgroundBorderShadow3 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[28.5px] relative shrink-0 w-[33px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 33 28.5">
        <g id="Container">
          <path d={svgPaths.pbd21200} fill="var(--fill-0, #9CA3AF)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#e5e7eb] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[96px]" data-name="Background">
      <Container86 />
    </div>
  );
}

function Margin15() {
  return (
    <div className="content-stretch flex flex-col h-[112px] items-start pb-[16px] relative shrink-0 w-[96px]" data-name="Margin">
      <Background4 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-0" data-name="Container">
      <Margin15 />
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#f97316] text-[24px] text-center tracking-[0.6px] w-[175.39px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="whitespace-pre-wrap">
          <span className="leading-[32px]">Uncle Voo</span>
          <span className="font-['Fredoka:Bold',sans-serif] font-bold leading-[32px] text-[#3b82f6]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` Farm`}</span>
        </p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[176px]" data-name="Container">
      <div className="flex flex-col font-['Fredoka:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] text-center w-[311.28px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px] whitespace-pre-wrap">© 2023 Uncle Voo Farm. All rights reserved.</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[10.704px] relative shrink-0 w-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 10.7042">
        <g id="Container">
          <path d={svgPaths.p22180e58} fill="var(--fill-0, #F87171)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center justify-center left-[16px] right-[16px] top-[224px]" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[14px] text-center w-[66.5px]">
        <p className="leading-[20px] whitespace-pre-wrap">Made with</p>
      </div>
      <Container89 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[14px] text-center w-[141.09px]">
        <p className="leading-[20px] whitespace-pre-wrap">and organic compost.</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[244px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container85 />
        <Container87 />
        <Container88 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#fffcf5] content-stretch flex flex-col items-start left-0 pb-[64px] pt-[65px] right-0 top-[8253px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <Container84 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[40px] justify-center leading-[0] relative shrink-0 text-[#111827] text-[36px] text-center w-[273.06px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[40px] whitespace-pre-wrap">Stay at the Farm</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[48px] justify-center leading-[24px] relative shrink-0 text-[#374151] text-[16px] text-center w-[645.94px] whitespace-pre-wrap">
        <p className="mb-0">Experience rural living with modern comforts. Wake up to the sound of roosters and the</p>
        <p>smell of freshly brewed coffee.</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Container92 />
    </div>
  );
}

function Container95() {
  return (
    <div className="h-[80px] relative shrink-0 w-[88px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 80">
        <g id="Container">
          <path d={svgPaths.p3755b200} fill="var(--fill-0, #F97316)" fillOpacity="0.2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Container95 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#ffedd5] h-[192px] relative shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container94 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[24px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px] whitespace-pre-wrap">Cozy Cabin</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading8 />
    </div>
  );
}

function Margin17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[106.92px] pl-[8px] top-[11px]" data-name="Margin">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-[49.89px]">
        <p className="leading-[24px] whitespace-pre-wrap">/ night</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] left-0 text-[#f97316] text-[30px] top-[18px] w-[106.92px]">
        <p className="leading-[36px] whitespace-pre-wrap">RM 450</p>
      </div>
      <Margin17 />
    </div>
  );
}

function Margin16() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container97 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#374151] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">A rustic wooden cabin perfect for couples.</p>
        <p className="mb-0">Includes a private porch overlooking the</p>
        <p>pineapple fields and a warm fireplace.</p>
      </div>
    </div>
  );
}

function Margin18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[24px] relative w-full" data-name="Margin">
      <Container98 />
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container99 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[55.34px]">
        <p className="leading-[20px] whitespace-pre-wrap">2 Guests</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container100 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[72.05px]">
        <p className="leading-[20px] whitespace-pre-wrap">Queen Bed</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container101 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[121.64px]">
        <p className="leading-[20px] whitespace-pre-wrap">Breakfast Included</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="List:margin">
      <List />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#3b82f6] content-stretch flex flex-col items-center justify-center py-[12px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_4px_6px_-1px_#bfdbfe,0px_2px_4px_-2px_#bfdbfe]" data-name="Button:shadow" />
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-[135.55px]">
        <p className="leading-[24px] whitespace-pre-wrap">Check Availability</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Heading3Margin />
        <Margin16 />
        <Margin18 />
        <ListMargin />
        <Button4 />
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#3b82f6] right-px rounded-bl-[32px] rounded-tr-[32px] top-px" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative">
        <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-white w-[84.48px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
          <p className="leading-[20px] whitespace-pre-wrap">Most Popular</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-[#fffcf5] flex-[1_0_0] min-h-px min-w-px relative rounded-[48px] self-stretch" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background5 />
        <Container96 />
        <Background6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[68px] relative shrink-0 w-[88px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 88 68">
        <g id="Container">
          <path d={svgPaths.p3b0ba830} fill="var(--fill-0, #3B82F6)" fillOpacity="0.2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Container103 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#eff6ff] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container102 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[24px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px] whitespace-pre-wrap">Family Orchard House</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading9 />
    </div>
  );
}

function Margin20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[105.73px] pl-[8px] top-[11px]" data-name="Margin">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-[49.89px]">
        <p className="leading-[24px] whitespace-pre-wrap">/ night</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] left-0 text-[#f97316] text-[30px] top-[18px] w-[105.73px]">
        <p className="leading-[36px] whitespace-pre-wrap">RM 850</p>
      </div>
      <Margin20 />
    </div>
  );
}

function Margin19() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container105 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#374151] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Spacious living for the whole family. Two</p>
        <p className="mb-0">bedrooms, a full kitchen, and direct access</p>
        <p>to the fruit orchard for picking.</p>
      </div>
    </div>
  );
}

function Margin21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[24px] relative w-full" data-name="Margin">
      <Container106 />
    </div>
  );
}

function Container107() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container107 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[67.97px]">
        <p className="leading-[20px] whitespace-pre-wrap">4-6 Guests</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container108 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[74.28px]">
        <p className="leading-[20px] whitespace-pre-wrap">Full Kitchen</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container109 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[101.5px]">
        <p className="leading-[20px] whitespace-pre-wrap">Orchard Access</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item3 />
      <Item4 />
      <Item5 />
    </div>
  );
}

function ListMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="List:margin">
      <List1 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[2px] py-[14px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#3b82f6] text-[16px] text-center w-[135.55px]">
        <p className="leading-[24px] whitespace-pre-wrap">Check Availability</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Heading3Margin1 />
        <Margin19 />
        <Margin21 />
        <ListMargin1 />
        <Button5 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="bg-[#fffcf5] flex-[1_0_0] min-h-px min-w-px relative rounded-[48px] self-stretch" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background7 />
        <Container104 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container111() {
  return (
    <div className="relative shrink-0 size-[80px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="Container">
          <path d={svgPaths.pbf21980} fill="var(--fill-0, #22C55E)" fillOpacity="0.2" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute content-stretch flex inset-0 items-center justify-center" data-name="Container">
      <Container111 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f0fdf4] h-[192px] relative shrink-0 w-full z-[2]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container110 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#111827] text-[24px] w-full" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[32px] whitespace-pre-wrap">Camping Under Stars</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <Heading10 />
    </div>
  );
}

function Margin23() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[100.95px] pl-[8px] top-[11px]" data-name="Margin">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[24px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[16px] w-[49.89px]">
        <p className="leading-[24px] whitespace-pre-wrap">/ night</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[36px] justify-center leading-[0] left-0 text-[#f97316] text-[30px] top-[18px] w-[100.95px]">
        <p className="leading-[36px] whitespace-pre-wrap">RM 150</p>
      </div>
      <Margin23 />
    </div>
  );
}

function Margin22() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Margin">
      <Container113 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal justify-center leading-[24px] relative shrink-0 text-[#374151] text-[16px] w-full whitespace-pre-wrap">
        <p className="mb-0">Reconnect with nature at our premium</p>
        <p className="mb-0">campsites. Safe, secluded spots with</p>
        <p className="mb-0">access to shared bonfire pits and</p>
        <p>amenities.</p>
      </div>
    </div>
  );
}

function Margin24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px pb-[24px] relative w-full" data-name="Margin">
      <Container114 />
    </div>
  );
}

function Container115() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container115 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[58.33px]">
        <p className="leading-[20px] whitespace-pre-wrap">BYO Tent</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container116 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[95.09px]">
        <p className="leading-[20px] whitespace-pre-wrap">Bonfire Access</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="Container">
          <path d={svgPaths.p1041200} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Item">
      <Container117 />
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[14px] w-[121.23px]">
        <p className="leading-[20px] whitespace-pre-wrap">Shared Bathrooms</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="List">
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function ListMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full" data-name="List:margin">
      <List2 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-center px-[2px] py-[14px] relative rounded-[24px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[#3b82f6] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-col font-['Quicksand:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#3b82f6] text-[16px] text-center w-[135.55px]">
        <p className="leading-[24px] whitespace-pre-wrap">Check Availability</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[32px] relative size-full">
        <Heading3Margin2 />
        <Margin22 />
        <Margin24 />
        <ListMargin2 />
        <Button6 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="bg-[#fffcf5] flex-[1_0_0] min-h-px min-w-px relative rounded-[48px] self-stretch" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background8 />
        <Container112 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[48px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow4 />
      <BackgroundBorderShadow5 />
      <BackgroundBorderShadow6 />
    </div>
  );
}

function Background9() {
  return (
    <div className="h-[53.25px] relative shrink-0 w-[62px]" data-name="Background">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 62 53.25">
        <g id="Background">
          <rect fill="var(--fill-0, #DBEAFE)" height="53.25" rx="24" width="62" />
          <path d={svgPaths.p587f600} fill="var(--fill-0, #3B82F6)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[20px] w-[80.47px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">Fast Wifi</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] w-[172.3px] whitespace-pre-wrap">
        <p className="mb-0">Stay connected even while</p>
        <p>immersed in nature.</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading11 />
      <Container120 />
    </div>
  );
}

function Margin25() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] relative">
        <Container119 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#fffcf5] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex items-start p-[33px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Background9 />
        <Margin25 />
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="h-[57px] relative shrink-0 w-[50.75px]" data-name="Background">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 50.75 57">
        <g id="Background">
          <rect fill="var(--fill-0, #FFEDD5)" height="57" rx="24" width="50.75" />
          <path d={svgPaths.p392fb740} fill="var(--fill-0, #F97316)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[20px] w-[118.63px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">Farm Kitchen</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] w-[232.84px] whitespace-pre-wrap">
        <p className="mb-0">Cook your own meals with our fresh</p>
        <p>produce.</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading12 />
      <Container122 />
    </div>
  );
}

function Margin26() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] relative">
        <Container121 />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#fffcf5] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex items-start p-[33px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Background10 />
        <Margin26 />
      </div>
    </div>
  );
}

function Background11() {
  return (
    <div className="relative shrink-0 size-[57px]" data-name="Background">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 57 57">
        <g id="Background">
          <rect fill="var(--fill-0, #DCFCE7)" height="57" rx="24" width="57" />
          <path d={svgPaths.p5813ec0} fill="var(--fill-0, #22C55E)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[20px] w-[122.2px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[28px] whitespace-pre-wrap">Nature Walks</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Quicksand:Regular',sans-serif] font-normal h-[40px] justify-center leading-[20px] relative shrink-0 text-[#6b7280] text-[14px] w-[234.08px] whitespace-pre-wrap">
        <p className="mb-0">Guided tours of the plantation every</p>
        <p>morning.</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Heading13 />
      <Container124 />
    </div>
  );
}

function Margin27() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[16px] relative">
        <Container123 />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#fffcf5] flex-[1_0_0] min-h-px min-w-px relative rounded-[32px] self-stretch" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <div className="content-stretch flex items-start p-[33px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[32px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
        <Background11 />
        <Margin27 />
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex gap-[32px] items-start justify-center pt-[16px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container90() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[32px] relative w-full">
        <Container91 />
        <Container93 />
        <Container118 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col items-start left-0 py-[80px] right-0 rounded-tl-[48px] rounded-tr-[48px] shadow-[0px_-10px_40px_0px_rgba(0,0,0,0.05)] top-[4881px]" data-name="Section">
      <Container90 />
    </div>
  );
}

function UncleVooLogo() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Uncle Voo Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgUncleVooLogo} />
      </div>
    </div>
  );
}

function Margin28() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[12px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold h-[32px] justify-center leading-[0] relative shrink-0 text-[#f97316] text-[24px] tracking-[0.6px] w-[175.39px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="whitespace-pre-wrap">
          <span className="leading-[32px]">Uncle Voo</span>
          <span className="font-['Fredoka:Bold',sans-serif] font-bold leading-[32px] text-[#3b82f6]" style={{ fontVariationSettings: "\'wdth\' 100" }}>{` Farm`}</span>
        </p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <UncleVooLogo />
      <Margin28 />
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[16px] w-[41.41px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px] whitespace-pre-wrap">Home</p>
      </div>
    </div>
  );
}

function LinkMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[16px] w-[120.03px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px] whitespace-pre-wrap">Stay at the Farm</p>
      </div>
    </div>
  );
}

function LinkMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] relative shrink-0 text-[#374151] text-[16px] w-[95.55px]" style={{ fontVariationSettings: "\'wdth\' 100" }}>
        <p className="leading-[24px] whitespace-pre-wrap">Our Products</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#f97316] content-stretch flex flex-col items-start px-[24px] py-[12px] relative rounded-[9999px] shrink-0" data-name="Link">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_4px_6px_-1px_#fed7aa,0px_2px_4px_-2px_#fed7aa]" data-name="Link:shadow" />
      <div className="flex flex-col font-['Fredoka:Semi_Bold',sans-serif] h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-[80.05px]">
        <p className="leading-[24px] whitespace-pre-wrap">Contact Us</p>
      </div>
    </div>
  );
}

function LinkMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Link:margin">
      <Link7 />
    </div>
  );
}

function Container128() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Container">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Container">
          <path d={svgPaths.p7281a80} fill="var(--fill-0, #4B5563)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container128 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[32px] relative shrink-0" data-name="Button:margin">
      <Button7 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <Link6 />
      <LinkMargin3 />
      <LinkMargin4 />
      <LinkMargin5 />
      <ButtonMargin />
    </div>
  );
}

function Container125() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container126 />
        <Container127 />
      </div>
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute backdrop-blur-[6px] bg-[rgba(255,252,245,0.9)] content-stretch flex flex-col items-start left-0 pb-px px-[32px] right-0 top-0" data-name="Nav">
      <div aria-hidden="true" className="absolute border-[#ffedd5] border-b border-solid inset-0 pointer-events-none" />
      <Container125 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#fffcf5] relative size-full" data-name="Body">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      <Section4 />
      <Nav />
    </div>
  );
}