"use client";
import { motion, type MotionProps } from "framer-motion";

type MotionElementProps<T extends React.ElementType = "div"> = {
  as?: T;
} & Omit<React.ComponentPropsWithoutRef<T>, keyof MotionProps> &
  MotionProps;

const MotionElement = <T extends React.ElementType = "div">({
  as = "div" as T,
  ...props
}: MotionElementProps<T>) => {
  const Component = motion.create(as as string);
  return <Component {...props} />;
};

export default MotionElement;
