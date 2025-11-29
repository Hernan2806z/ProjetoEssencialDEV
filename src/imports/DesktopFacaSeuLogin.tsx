import svgPaths from "./svg-c6tgkqz66s";
import imgImage1 from "figma:asset/327e2159df2e53044a7d02bc1650e6f7dc8989d8.png";

function Heading() {
  return (
    <div className="absolute h-[80px] left-0 not-italic text-[#27272e] top-0 w-[425px]" data-name="Heading">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[1.36] left-0 text-[28px] top-0 w-[424px]">Bem vindo(a) de volta!</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.62] left-0 text-[16px] top-[50px] w-[424px]">Deixe seus exames em dia.</p>
    </div>
  );
}

function XFormGroup() {
  return <div className="absolute h-[71px] left-0 top-[140px] w-[424px]" data-name="x-form-group" />;
}

function FormTitleDefault() {
  return (
    <div className="h-[17px] relative shrink-0 w-full" data-name="form-title/default">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium inset-0 justify-center leading-[0] not-italic text-[#425466] text-[14px]">
        <p className="leading-[normal]">E-Mail</p>
      </div>
    </div>
  );
}

function Control() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-1/2 translate-y-[-50%]" data-name="Control">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7a828a] text-[15px] text-nowrap">
        <p className="leading-[15px] whitespace-pre">Insira seu E-mail</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[16px] left-[16px] overflow-clip right-[50px] top-[calc(50%-1px)] translate-y-[-50%]" data-name="Container">
      <Control />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#edf2f7] h-[46px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-2 border-[#b5b5bd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container />
    </div>
  );
}

function InputLarge() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-0 items-start" data-name="input/large">
      <FormTitleDefault />
      <Input />
    </div>
  );
}

function XFormGroup1() {
  return (
    <div className="absolute h-[71px] left-0 top-[44px] w-[424px]" data-name="x-form-group">
      <InputLarge />
    </div>
  );
}

function FormTitleDefault1() {
  return (
    <div className="h-[17px] relative shrink-0 w-full" data-name="form-title/default">
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium inset-0 justify-center leading-[0] not-italic text-[#425466] text-[14px]">
        <p className="leading-[normal]">Senha</p>
      </div>
    </div>
  );
}

function Control1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center left-0 top-1/2 translate-y-[-50%]" data-name="Control">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#7a828a] text-[15px] text-nowrap">
        <p className="leading-[15px] whitespace-pre">Insira sua senha</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[16px] left-[16px] overflow-clip right-[50px] top-[calc(50%-1px)] translate-y-[-50%]" data-name="Container">
      <Control1 />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[#edf2f7] h-[46px] relative rounded-[6px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border-2 border-[#b5b5bd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <Container1 />
    </div>
  );
}

function FormHelpText() {
  return (
    <div className="h-[12px] relative shrink-0 w-[188px]" data-name="form-help-text">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] not-italic text-[#718096] text-[11px]">
        <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[12px]">
          <span>{`Esqueceu sua senha? `}</span>
          <span className="text-[#00d5be]">Clique Aqui</span>
        </p>
      </div>
    </div>
  );
}

function InputLarge1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] inset-0 items-start" data-name="input/large">
      <FormTitleDefault1 />
      <Input1 />
      <FormHelpText />
    </div>
  );
}

function XFormGroup2() {
  return (
    <div className="absolute h-[91px] left-0 top-[145px] w-[424px]" data-name="x-form-group">
      <InputLarge1 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#a3b3ff] h-[48px] left-0 rounded-[90px] top-[330px] w-[424px]" data-name="button">
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[16px] left-[212.5px] text-[#fcfcfd] text-[16px] text-center text-nowrap top-[16px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        ENTRAR
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[44px] left-[85px] top-[399px] w-[253px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[calc(50%+116.5px)] not-italic text-[#425466] text-[14px] text-nowrap text-right top-[calc(50%-12px)] translate-x-[-100%] whitespace-pre">
        <span className="text-[#718096]">Não possui conta?</span> <span className="text-[#00d5be]">Faça o seu Cadastro</span>
      </p>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[387px] left-0 top-[106px] w-[424px]" data-name="form">
      <XFormGroup />
      <XFormGroup1 />
      <XFormGroup2 />
      <Button />
      <Frame2 />
    </div>
  );
}

function FormRegisterDefault() {
  return (
    <div className="absolute h-[575px] left-[112px] top-[99px] w-[424px]" data-name="form-register/default">
      <Heading />
      <Form />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute h-[882px] left-1/2 top-0 translate-x-[-50%] w-[648px]" data-name="main">
      <FormRegisterDefault />
    </div>
  );
}

function MenuItem1() {
  return <div className="absolute h-[40px] left-[210px] top-[820px] w-[230px]" data-name="menu item 03" />;
}

function IconsLightBulbLine() {
  return (
    <div className="absolute left-0 size-[20px] top-0" data-name="icons/Light Bulb/Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="icons/Light Bulb/Line">
          <path clipRule="evenodd" d={svgPaths.p2711000} fill="var(--fill-0, #8C8C8C)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.p18f79000} fill="var(--fill-0, #8C8C8C)" fillRule="evenodd" id="Shape_2" />
          <path d={svgPaths.p763300} fill="var(--fill-0, #8C8C8C)" id="Shape_3" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[168px]" data-name="menu item">
      <IconsLightBulbLine />
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[16px] left-[28px] text-[#8c8c8c] text-[14px] top-[2px] w-[140px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Dark theme
      </p>
    </div>
  );
}

function Frame1() {
  return <div className="absolute bg-[#d9d9d9] left-[3px] rounded-[32px] size-[12px] top-[4px]" />;
}

function Frame() {
  return (
    <div className="absolute bg-[#8c8c8c] h-[20px] left-[184px] overflow-clip rounded-[32px] top-0 w-[40px]">
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[20px] left-0 top-[17px] w-[224px]">
      <MenuItem />
      <Frame />
    </div>
  );
}

function Darkmode() {
  return (
    <div className="absolute h-[40px] left-[210px] top-[820px] w-[230px]" data-name="darkmode">
      <Frame3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[858px] left-[calc(50%+16px)] top-[46px] w-[648px]" data-name="container">
      <Main />
      <MenuItem1 />
      <Darkmode />
    </div>
  );
}

function DividerVertical() {
  return (
    <div className="absolute bottom-0 right-[-1.03px] top-0 w-px" data-name="divider-vertical">
      <div className="absolute bottom-0 left-[-100%] right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 950">
          <g id="divider-vertical">
            <line id="Line" stroke="var(--stroke-0, #EDF2F7)" x1="0.5" x2="0.5" y1="950" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Aside() {
  return (
    <div className="absolute bottom-0 left-0 right-[50.14%] top-0" data-name="aside">
      <div className="absolute inset-0" data-name="sidenav-bg" />
      <DividerVertical />
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold h-[100px] leading-[48px] left-[140px] text-[40px] text-white top-[250px] tracking-[-0.4px] w-[473px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Bem vindo(a) de volta!
      </p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-[132px] not-italic text-[18px] text-white top-[326px] w-[420px]">texto texto texto texto texto texto texto texto</p>
    </div>
  );
}

function AntDesignPictureFilled() {
  return (
    <div className="absolute left-[calc(8.33%+124px)] size-[224px] top-[581px]" data-name="ant-design:picture-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 224">
        <g id="ant-design:picture-filled">
          <path d={svgPaths.p2bd9ff80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function DesktopFacaSeuLogin() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop/Faça seu Login">
      <Container2 />
      <Aside />
      <AntDesignPictureFilled />
      <div className="absolute h-[58px] left-[21px] top-[32px] w-[237px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}