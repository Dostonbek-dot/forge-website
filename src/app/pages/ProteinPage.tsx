import { ProteinAminoProfile } from "../components/protein-amino-profile";
import { ProteinClose } from "../components/protein-close";
import { ProteinHero } from "../components/protein-hero";
import { ProteinLabel } from "../components/protein-label";

export function ProteinPage() {
  return (
    <>
      <ProteinHero />
      <ProteinAminoProfile />
      <ProteinLabel />
      <ProteinClose />
    </>
  );
}
