import { CryptoIcon } from "~/components/icons/crypto";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ChartIcon } from "../icons/chart";
import { DevicesIcon } from "../icons/devices";
import { TradeIcon } from "../icons/trade";

export function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-t from-gray-100 to-background pb-20"
    >
      <div className="m-auto flex max-w-7xl flex-col-reverse items-center gap-8 px-8 pt-20 lg:flex-row lg:px-0">
        <div className="overflow-x:scroll flex w-full max-w-3xl gap-8 scrollbar-thin md:flex-wrap">
          <Card className="w-[280px]">
            <CardHeader>
              <CryptoIcon />
              <CardDescription className="font-bold text-primary-500">
                For your company
              </CardDescription>
              <CardTitle>Crypto Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </CardContent>
          </Card>

          <Card className="w-[280px]">
            <CardHeader>
              <TradeIcon />
              <CardDescription className="font-bold text-primary-500">
                For your company
              </CardDescription>
              <CardTitle>Crypto Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </CardContent>
          </Card>

          <Card className="w-[280px] md:ml-20">
            <CardHeader>
              <ChartIcon />
              <CardDescription className="font-bold text-primary-500">
                For your company
              </CardDescription>
              <CardTitle>Crypto Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </CardContent>
          </Card>

          <Card className="w-[280px]">
            <CardHeader>
              <DevicesIcon />
              <CardDescription className="font-bold text-primary-500">
                For your company
              </CardDescription>
              <CardTitle>Crypto Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="mb-1 text-xl font-bold text-primary-500">
            Lorem ipsum
          </h2>
          <h3 className="mb-6 text-5xl font-bold">Lorem ipsum</h3>
          <p className="mb-8 max-w-xl text-base leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
            asperiores quam quas, hic similique fuga nam quisquam voluptatem
            cupiditate ducimus expedita sit illo laborum earum tempora
            praesentium doloribus ea quo!
          </p>

          <Button rounded="full" size="lg" className="hidden lg:flex">
            Sing up now
          </Button>
        </div>
      </div>
    </section>
  );
}
