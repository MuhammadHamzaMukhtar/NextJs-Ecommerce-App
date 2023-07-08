import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import Promotions from "@/views/Promotions";
import Specifications from "@/views/Specifications";

export default function Home() {
  return (
    <section className="space-y-32">
      <Hero />
      <Promotions />
      <ProductList />
      <Specifications />
    </section>
  );
}
