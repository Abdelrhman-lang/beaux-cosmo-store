import FaceCareGrid from "../(components)/face-care-grid/FaceCareGrid";
import SectionHeader from "../(components)/sec-head/SectionHeader";

export default function AboutFaceCare() {
  return (
    <section className="pt-[120px] pb-20 px-5 lg:px-0">
      <SectionHeader
        hasBg={false}
        subTitle={"Branded"}
        title={"Face Care Creams"}
      />
      <div className="custom-container">
        <FaceCareGrid />
      </div>
    </section>
  );
}
