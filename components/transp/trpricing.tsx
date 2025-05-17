"use client";

import { motion } from "framer-motion";
// If "@/lib/utils" does not exist, create it or update the import path below to the correct location.
// Example: import { cn } from "../../lib/utils"; // adjust the path as needed
import { cn } from "@/lib/utils";
import { Button } from "@/components/Ui/button";
import { Card } from "@/components/Ui/card";
import { Check, X } from "lucide-react";
export default function MiscPricing() {
  const plans = [{
    tier: "Free",
    price: "$0",
    bestFor: "For small side projects",
    CTA: "Get Started",
    benefits: [{
      text: "1 Team Member",
      checked: true
    }, {
      text: "2 GB Storage",
      checked: true
    }, {
      text: "Email Support",
      checked: true
    }, {
      text: "Basic Analytics",
      checked: false
    }, {
      text: "API Access",
      checked: false
    }]
  }, {
    tier: "Pro",
    price: "$29",
    bestFor: "For serious business",
    CTA: "Start Free Trial",
    benefits: [{
      text: "Unlimited Team Members",
      checked: true
    }, {
      text: "20 GB Storage",
      checked: true
    }, {
      text: "Priority Support",
      checked: true
    }, {
      text: "Advanced Analytics",
      checked: true
    }, {
      text: "API Access",
      checked: true
    }]
  }, {
    tier: "Enterprise",
    price: "Custom",
    bestFor: "For large organizations",
    CTA: "Contact Sales",
    benefits: [{
      text: "Unlimited Everything",
      checked: true
    }, {
      text: "Dedicated Support",
      checked: true
    }, {
      text: "Custom Integration",
      checked: true
    }, {
      text: "Custom Analytics",
      checked: true
    }, {
      text: "SLA",
      checked: true
    }]
  }];
  return <section className="py-24 px-4 relative">
      {}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-primary/20 via-accent/10 to-background " />

        {}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[linear-gradient(0deg,transparent_0%,rgba(var(--primary),0.1)_30%,rgba(var(--accent),0.1)_70%,transparent_100%)]" />

        {}
        <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
      }} />
      </div>
      <div className="container mx-auto max-w-7xl z-10">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }}>
          <h2 className="bg-linear-to-br from-foreground to-foreground/60 bg-clip-text text-5xl font-semibold text-transparent sm:text-6xl lg:text-7xl">
            Simple, <span className="italic pr-2">Transparent </span> Pricing
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Choose the perfect plan for your needs. No hidden fees.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => <motion.div key={plan.tier} initial={{
          filter: "blur(2px)"
        }} whileInView={{
          filter: "blur(0px)"
        }} transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.25 * index ? index : 1
        }}>
              <Card className={cn("relative h-full w-full overflow-hidden border group", "border-border bg-card p-6 transition-all duration-300", "hover:shadow-[0_0_30px_-5px_var(--tw-shadow-color)] hover:shadow-primary/20")}>
                {}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full scale-90" />
                </div>

                <div className="relative flex flex-col items-center border-b border-border pb-6">
                  <span className="mb-6 inline-block text-foreground">
                    {plan.tier}
                  </span>
                  <span className="mb-3 inline-block text-4xl font-medium">
                    {plan.price}
                  </span>
                  <span className="text-center text-muted-foreground">
                    {plan.bestFor}
                  </span>
                </div>
                <div className="space-y-4 py-9">
                  {plan.benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                      {benefit.checked ? <span className="grid size-4 place-content-center rounded-full bg-primary text-sm text-primary-foreground">
                          <Check className="size-3" />
                        </span> : <span className="grid size-4 place-content-center rounded-full bg-muted text-sm text-muted-foreground">
                          <X className="size-3" />
                        </span>}
                      <span className="text-sm text-muted-foreground">
                        {benefit.text}
                      </span>
                    </div>)}
                </div>
                <Button className="w-full border border-border" variant={plan.tier === "Pro" ? "default" : "ghost"}>
                  {plan.CTA}
                </Button>
              </Card>
            </motion.div>)}
        </div>
      </div>
    </section>;
}