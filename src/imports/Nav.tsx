import svgPaths from "./svg-dozv0ja9gn";
import imgImage1 from "figma:asset/327e2159df2e53044a7d02bc1650e6f7dc8989d8.png";

function Divider() {
  return <div className="absolute bg-[#e6e8ec] h-[40px] left-[362px] rounded-[2px] top-[6px] w-[2px]" data-name="divider" />;
}

function IconsUserLine() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="icons/User/Line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="icons/User/Line">
          <path clipRule="evenodd" d={svgPaths.p230f0080} fill="var(--fill-0, #FAFAFA)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.p2ac7280} fill="var(--fill-0, #FAFAFA)" fillRule="evenodd" id="Shape_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
      <IconsUserLine />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[44px] left-[1239px] top-[4px] w-[48px]">
      <Frame1 />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="absolute h-[52px] left-[31px] top-1/2 translate-y-[-50%] w-[1385px]" data-name="Left content">
      <Divider />
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[16px] left-[508.5px] text-[16px] text-center text-neutral-50 top-[18px] translate-x-[-50%] w-[59px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Inicio
      </p>
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[16px] left-[675.5px] text-[16px] text-center text-neutral-50 top-[calc(50%-8px)] translate-x-[-50%] w-[45px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Blog
      </p>
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[16px] left-[866.5px] text-[16px] text-center text-neutral-50 top-[18px] translate-x-[-50%] w-[107px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Sobre nós
      </p>
      <p className="absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[16px] left-[1079.5px] text-[16px] text-center text-neutral-50 top-[calc(50%-16px)] translate-x-[-50%] w-[89px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Assistente Virtual
      </p>
      <Frame />
      <div className="absolute h-[58px] left-[10px] top-0 w-[237px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Divider1() {
  return <div className="bg-[#e6e8ec] h-[115px] rounded-[1px] w-[5px]" data-name="divider" />;
}

function NavContent() {
  return (
    <div className="absolute h-[92px] left-0 top-0 w-[1440px]" data-name="Nav content">
      <LeftContent />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[482px] top-[87px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "5", "--transform-inner-height": "115" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <Divider1 />
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  return (
    <div className="relative size-full" data-name="Nav">
      <NavContent />
    </div>
  );
}