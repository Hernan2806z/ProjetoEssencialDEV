import svgPaths from "./svg-hzyajqhud6";
import logo from "./asset/logo.png";

function Section() {
  return <div className="absolute left-[1199px] size-0 top-[381.5px]" data-name="Section" />;
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px] whitespace-pre">Assistente Virtual</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[73px] items-start pb-px pt-[24px] px-[24px] relative w-full">
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M8 5.33333V2.66667H5.33333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1ed63c00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 9.33333H2.66667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 9.33333H14.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 8.66667V10" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6 8.66667V10" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#00d5be] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[32px]">
        <Icon />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#1a1a1a] text-[16px] top-[-0.5px] tracking-[-0.3125px] w-[552px]">Olá! Bem-vindo ao assistente virtual da EssencialDEV. Como posso ajudá-lo hoje?</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-neutral-100 grow min-h-px min-w-px relative rounded-[8px] shrink-0 w-[592.195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-full items-start pb-0 pt-[12px] px-[16px] relative w-[592.195px]">
        <Container2 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[592.195px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[592.195px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[4px] not-italic text-[12px] text-neutral-500 text-nowrap top-px whitespace-pre">22:45</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[96px] relative shrink-0 w-[592.195px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[96px] items-start relative w-[592.195px]">
        <Container3 />
        <Text />
      </div>
    </div>
  );
}

function ChatBubble() {
  return (
    <div className="content-stretch flex gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="ChatBubble">
      <Container1 />
      <Container4 />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="content-stretch flex flex-col h-[382px] items-start overflow-clip relative shrink-0 w-[1104px]" data-name="Primitive.div">
      <ChatBubble />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2844fe80} id="Vector" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="basis-0 bg-neutral-100 grow h-[60px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Textarea">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[60px] items-start px-[12px] py-[8px] relative w-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-500 text-nowrap tracking-[-0.1504px] whitespace-pre">Digite sua mensagem... (Enter para enviar, Shift+Enter para nova linha)</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_106_1212)" id="Icon">
          <path d={svgPaths.pb7a5200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3370bc40} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_106_1212">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#00d5be] opacity-50 relative rounded-[6px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[36px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[60px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Textarea />
      <Button1 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[34px] left-0 rounded-[1.67772e+07px] top-0 w-[139.039px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[7.5px] tracking-[-0.1504px] whitespace-pre">Agendar consulta</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[34px] left-[147.04px] rounded-[1.67772e+07px] top-0 w-[146.367px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[7.5px] tracking-[-0.1504px] whitespace-pre">Remarcar consulta</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[34px] left-[301.41px] rounded-[1.67772e+07px] top-0 w-[141.852px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[13px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[7.5px] tracking-[-0.1504px] whitespace-pre">Cancelar consulta</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[34px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function ChatComposer() {
  return (
    <div className="bg-neutral-50 h-[135px] relative shrink-0 w-full" data-name="ChatComposer">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[135px] items-start pb-0 pt-[17px] px-[16px] relative w-full">
          <Container5 />
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-neutral-50 left-[calc(50%+0.5px)] rounded-[8px] top-[24px] translate-x-[-50%] w-[1158px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col gap-[24px] items-center overflow-clip p-px relative rounded-[inherit] w-[1158px]">
        <Container />
        <PrimitiveDiv />
        <ChatComposer />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ChatPage() {
  return (
    <div className="bg-[rgba(245,245,245,0.3)] h-[761px] relative shrink-0 w-full" data-name="ChatPage">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-white h-[763px] left-0 rounded-[8px] top-0 w-[1441px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[763px] items-start overflow-clip p-px relative rounded-[inherit] w-[1441px]">
        <ChatPage />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[rgba(245,245,245,0.3)] h-[763px] left-0 overflow-clip top-[92px] w-[1393px]" data-name="App">
      <Section />
      <Container8 />
    </div>
  );
}

function Divider() {
  return <div className="absolute bg-[#e6e8ec] h-[40px] left-[362px] rounded-[2px] top-[6px] w-[2px]" data-name="Divider" />;
}

function Paragraph() {
  return (
    <div className="absolute h-[16px] left-[479px] top-[18px] w-[59px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[16px] left-[29.77px] text-[16px] text-center text-neutral-50 text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inicio
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[16px] left-[653px] top-[18px] w-[45px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[16px] left-[22.87px] text-[16px] text-center text-neutral-50 text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Blog
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[16px] left-[813px] top-[18px] w-[107px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[16px] left-[53.57px] text-[16px] text-center text-neutral-50 text-nowrap top-[0.5px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sobre nós
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[32px] left-[1035px] top-[10px] w-[89px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[16px] left-[44.72px] text-[16px] text-center text-neutral-50 top-[0.5px] translate-x-[-50%] w-[84px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Assistente Virtual
      </p>
    </div>
  );
}

function IconsUserLine() {
  return (
    <div className="absolute contents inset-[4.17%_12.5%]" data-name="icons/User/Line">
      <div className="absolute inset-[45.83%_12.5%_4.17%_12.5%]" data-name="Shape">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
          <path clipRule="evenodd" d={svgPaths.p203eab70} fill="var(--fill-0, #FAFAFA)" fillRule="evenodd" id="Shape" />
        </svg>
      </div>
      <div className="absolute bottom-[45.83%] left-1/4 right-1/4 top-[4.17%]" data-name="Shape_2">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
          <path clipRule="evenodd" d={svgPaths.pf291e00} fill="var(--fill-0, #FAFAFA)" fillRule="evenodd" id="Shape_2" />
        </svg>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <IconsUserLine />
    </div>
  );
}

function IconsUserLine1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1251px] size-[24px] top-[14px]" data-name="IconsUserLine">
      <Icon3 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[58px] left-[10px] top-0 w-[237px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={logo} />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="absolute h-[52px] left-[31px] top-[20px] w-[1385px]" data-name="LeftContent">
      <Divider />
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
      <IconsUserLine1 />
      <Image />
    </div>
  );
}

function Divider1() {
  return <div className="absolute bg-[#e6e8ec] h-[5px] left-[1053px] rounded-[1px] top-[87px] w-[115px]" data-name="Divider1" />;
}

function NavContent() {
  return (
    <div className="h-[92px] relative shrink-0 w-full" data-name="NavContent">
      <LeftContent />
      <Divider1 />
    </div>
  );
}

function Divider2() {
  return <div className="bg-[#e6e8ec] h-px shrink-0 w-full" data-name="Divider2" />;
}

function Nav() {
  return (
    <div className="absolute content-stretch flex flex-col h-[92px] items-start left-0 top-0 w-[1440px]" data-name="Nav">
      <NavContent />
      <Divider2 />
    </div>
  );
}

export default function ChatbotLight() {
  return (
    <div className="bg-white relative size-full" data-name="CHATBOT/Light">
      <App />
      <Nav />
    </div>
  );
}