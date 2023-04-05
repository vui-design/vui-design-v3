import type { ExtractPropTypes, PropType, HTMLAttributes } from "vue";
import type { Status } from "./types";
import { defineComponent } from "vue";

export const createProps = () => {
  return {
    // 结果状态
    status: {
      type: String as PropType<String>,
      validator: (status: Status) => ["comingsoon", "403", "404", "500"].includes(status),
      default: undefined
    },
    // 宽度
    width: {
      type: [String, Number] as PropType<string | number>,
      default: undefined
    }
  };
};

export type ResultExceptionProps = Partial<ExtractPropTypes<ReturnType<typeof createProps>>> & HTMLAttributes;

export default defineComponent({
  name: "vui-result-exception",
  props: createProps(),
  setup(props, context) {
    return () => {
      if (!props.status) {
        return;
      }
      else if (props.status === "comingsoon") {
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 360 240" width={props.width}>
            <path fill="#E4EBF7" d="M153.8,0c-7.9,0-15.7,1.8-22.5,6.4c-14.6,9.9-21.3,29.8-33,43.7c-10.9,13.1-25,19.1-38.9,26.2c-11.7,5.9-16.7,20-18.7,33.9c-1.5,10.9-2.2,22.4-7,31.9c-5.5,11-15.7,17.9-22.8,27.6c-11.7,16-14.3,40.1-6,58.7c1.8,4,4.1,7.9,7.7,9.9c2.9,1.7,6.3,1.7,9.4,1.7h0.2h292.4c3.2,0,6.6,0,9.4-1.8c4.6-3,6.1-9.4,9.1-14.5c5.8-9.9,17.3-13.8,23.2-23.7c2.6-4.4,3.7-9.3,3.7-14.5v-0.1c0-8.1-2.9-16.6-6.9-24c-1.3-2.4-2.7-4.6-4.4-6.9c-9.2-12.8-21.5-23.3-27.1-38.5c-7.5-20.4-1.4-44.5-7.8-65.4c-4.5-14.7-15.4-26.7-28.4-31.3c-11.4-4.1-23.5-2.7-35.5-1.2c-8,1-16.1,1.9-24.1,1.3c-16.2-1.4-31.4-9.4-47-14.8C171,1.9,162.6,0,154.4,0H153.8L153.8,0z" />
            <path fill="#FFFFFF" d="M119,65h142v126H119V65z" />
            <path fill="#C5CFD6" d="M119,65h142v14H119V65z" />
            <path fill="#ED5565" d="M241,72c0,1.1,0.9,2,2,2s2-0.9,2-2l0,0c0-1.1-0.9-2-2-2S241,70.9,241,72L241,72z" />
            <path fill="#5CB85C" d="M247,72c0,1.1,0.9,2,2,2s2-0.9,2-2l0,0c0-1.1-0.9-2-2-2S247,70.9,247,72L247,72z" />
            <path fill="#F0AD4E" d="M253,72c0,1.1,0.9,2,2,2s2-0.9,2-2l0,0c0-1.1-0.9-2-2-2S253,70.9,253,72L253,72z" />
            <path fill="#F4F5F7" d="M148.5,128.6c-0.7,2.4-2.4,9.3,0.4,17.2c0.7,2.1,3.7,9.9,12,14.4c1.4,0.8,9.2,5,17.1,2.4c5.2-1.7,5-4.6,9.8-5.8c6.4-1.6,8.6,2.9,16.5,3c9.2,0.1,16-6.1,17.5-7.5c5.4-5.2,7.1-11.1,7.8-13.9c2.8-10.4-0.5-18.9-1.3-20.9c-3.5-8.6-9.8-13.2-12.4-15c-7.8-5.1-18.7-7.2-28-3.9c-11.8,4.2-9.5,13.1-22.5,17.3c-4.6,1.5-10.7,2.2-14.6,7.5C149.5,125.4,148.8,127.3,148.5,128.6z" />
            <path fill="#FFFFFF" d="M169.4,126.6h37.3c1.1,0,2,0.9,2,2l0,0l-0.1,41h-41.2l-0.1-41C167.4,127.5,168.3,126.6,169.4,126.6z" />
            <path fill="#EAECEF" d="M172.9,131.7h8c0.7,0,1,0.3,1,1v8.1c0,0.7-0.3,1-1,1h-8c-0.7,0-1-0.3-1-1v-8.1C171.9,132,172.2,131.7,172.9,131.7z M172.6,144.4h13.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-13.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,144.7,172.2,144.4,172.6,144.4z M172.6,152.5h30.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-30.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,152.8,172.2,152.5,172.6,152.5z M172.6,148.4h30.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-30.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,148.8,172.2,148.4,172.6,148.4z M172.6,156.5h30.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-30.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,156.9,172.2,156.5,172.6,156.5z" />
            <path fill="#D7D9E0" d="M215,119c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5h-2.2v3.1l0,0.1c0,2.7-1.8,4.9-4.3,5.6c2.4,0.7,4.2,3,4.3,5.6l0,0.1v3.6h2.2c0.3,0,0.5,0.2,0.5,0.5s-0.2,0.5-0.5,0.5h-16.4c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5h2.2v-3.6c0-2.7,1.8-5,4.3-5.7c-2.5-0.7-4.3-3-4.3-5.7V120h-2.2c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5H215z M206.8,129.5c-2.7,0-4.9,2.2-5,4.9l0,0.1v3.6h10v-3.6C211.8,131.7,209.5,129.5,206.8,129.5z M211.8,120h-10v3.1l0,0.1c0,2.7,2.3,4.9,5,4.9c2.7,0,5-2.2,5-5V120z" />
            <path fill="#DCE0E6" d="M210.1,134.5v3.6h-6.6v-3.6c0-0.5,0.1-1,0.3-1.4c0.7,0.3,1.4,0.4,2.1,0.2c1-0.2,0.9-0.2,2.2-0.7c0.6-0.3,1.2-0.1,1.6,0.5C210,133.5,210.1,134,210.1,134.5z M206.8,126.8c1.3,0,2.4-0.7,2.9-1.8c-0.5-0.2-1.1-0.2-1.7,0c-0.9,0.2-1.3,0.5-2.2,0.5c-0.6,0-1.2-0.2-1.9-0.5C204.4,126.1,205.5,126.8,206.8,126.8z" />
            <path fill="#EAECEF" d="M146.7,156.9h3c0.2,0,0.3,0.2,0.3,0.3l0,0v0.7c0,0.2-0.1,0.3-0.3,0.3h-3v3.1c0,0.2-0.1,0.3-0.3,0.3h-0.7c-0.2,0-0.3-0.2-0.3-0.3v-3.1h-3c-0.2,0-0.3-0.2-0.3-0.3v-0.7c0-0.2,0.1-0.3,0.3-0.3h3v-3.1c0-0.2,0.1-0.3,0.3-0.3h0.7c0.2,0,0.3,0.2,0.3,0.3C146.7,153.8,146.7,156.9,146.7,156.9z M214.5,165h1.7c0.2,0,0.3,0.2,0.3,0.3v0.7c0,0.2-0.1,0.3-0.3,0.3h-1.7v1.7c0,0.2-0.1,0.3-0.3,0.3h-0.7c-0.2,0-0.3-0.2-0.3-0.3v-1.7h-1.7c-0.2,0-0.3-0.2-0.3-0.3v-0.7c0-0.2,0.1-0.3,0.3-0.3h1.7v-1.7c0-0.2,0.1-0.3,0.3-0.3h0.7c0.2,0,0.3,0.2,0.3,0.3V165z M237.3,104.2c0.4,1.8,0.9,3,1.4,3.5c0.6,0.6,1.7,1,3.3,1.3c-1.8,0.2-2.9,0.5-3.4,1.1c-0.5,0.5-1,1.8-1.3,3.8c-0.3-1.9-0.7-3.1-1.3-3.6c-0.6-0.6-1.7-1-3.4-1.2c1.8-0.3,2.9-0.7,3.4-1.3S236.9,106,237.3,104.2z M160.5,100.8c0.4,1.8,0.9,3,1.4,3.5c0.6,0.6,1.7,1,3.3,1.3c-1.8,0.2-2.9,0.5-3.4,1.1c-0.5,0.5-1,1.8-1.3,3.8c-0.3-1.9-0.7-3.1-1.3-3.6c-0.6-0.6-1.7-1-3.4-1.2c1.8-0.3,2.9-0.7,3.4-1.3S160.1,102.6,160.5,100.8z M156.8,165.2c0.2,1.1,0.5,1.8,0.9,2.1c0.3,0.3,1,0.6,2,0.8c-1.1,0.1-1.7,0.3-2.1,0.6c-0.3,0.3-0.6,1.1-0.8,2.3c-0.2-1.1-0.4-1.8-0.8-2.2c-0.3-0.3-1-0.6-2.1-0.7c1.1-0.2,1.7-0.4,2.1-0.8C156.3,167,156.6,166.3,156.8,165.2L156.8,165.2z" />
            <path fill="#FECAC3" d="M111.8,136.9c-1.3-1.6-2.2-3.5-2.1-5.6c0.4-6.2,9.1-4.8,10.8-1.7c1.7,3.1,1.5,11-0.7,11.6c-0.9,0.2-2.7-0.3-4.6-1.4l1.2,8.3h-7L111.8,136.9z" />
            <path fill="#09192A" d="M117.4,130.1c-0.9,0.5-1.6,1.5-2.4,2.8c-0.2-0.1-0.4-0.1-0.6-0.1c-1,0-1.7,0.8-1.7,1.7c0,0.5,0.2,0.9,0.5,1.2c-0.4,0.6-0.9,1.2-1.4,1.8c-1.9-1.1-3.4-4.5-1.5-7.7c1.6-6.5,10.6-2.5,12.3-3.6C123,128.5,121.8,130.4,117.4,130.1L117.4,130.1z" />
            <path fill="#5C648C" d="M106.6,171.9l10.4,36.3l7.6,26.7h5.5l-8.1-63H106.6z" />
            <path fill="#7780AA" d="M103.8,171.9c-0.2,18.6-1.1,28.9-1.3,30.6c-0.3,1.7-4.1,12.5-11.5,32.4h5.7c9.4-19.1,14.8-29.9,15.9-32.4s4.5-12.7,9.6-30.6H103.8z" />
            <path fill="#191847" d="M90.3,240l0.3-6h6c2.9,2,6.6,3.6,11.2,4.9v1.1H97.1l-3.7-0.6v0.6H90.3z M123.9,240l0.3-6h6c2.9,2,6.6,3.6,11.2,4.9v1.1h-10.9l-3.7-0.6v0.6H123.9z" />
            <path fill="#FECAC3" d="M131.3,165.4l10.9-2c2.2-1.7,4.2-2.8,6-3.4c0.5,0,1.3,0.2,0.1,1.6c-1.2,1.4-2.5,2.9-2.2,3.7c0.2,0.7,1.4,0.5,1.5,1.6c0.1,0.8-1.7,0.9-5.5,0.4l-8.8,4.8L131.3,165.4L131.3,165.4z M96.9,168.9h6c-6.6,20.3-10.1,31-10.4,32c-0.6,2.2,0.7,5.5,1.3,7.2c-1.9,1.2-1.7-3.1-4.1-1.6c-2.2,1.4-3.8,3.9-6.3,1.8c-0.3-0.3-0.6-1.2,0.2-2c2-1.9,5-5.2,5.4-6.3C89.4,198.5,92.1,188.1,96.9,168.9L96.9,168.9z" />
            <path fill="#B7CDE6" d="M113.5,142.7l4.7,0.4c1.2,14.4,7.5,23.5,21.8,20.4l1.9,18.5c-13.4,2.4-25.1-4.9-27.4-24.6C113.9,152.5,113.4,147.1,113.5,142.7L113.5,142.7z" />
            <path fill="#D1E2F5" d="M111.1,140.8l7.2,2.2c0,16.9,3.9,27.6,5.9,40h-19.5c-0.3,4.4-0.4,8.8-0.5,13.2H89.7c3.3-23.8,10.2-42.4,20.9-55.4L111.1,140.8L111.1,140.8L111.1,140.8z" />
            <path fill="#B7CDE6" d="M107.9,159c-0.5,10.5-0.2,18.5,0.9,24h-3.9C105.4,174.6,106.4,166.5,107.9,159z" />
            <path fill="#92C110" d="M291.1,146.4c-6.7,0.5-11.1,4.9-13.1,11.1c-1.1,3.3-1.2,6.7-1.8,10.1c-0.9,5.1-2.9,8.9-6.7,12.6c-1.2,1.2-2.1,2.2-2.7,3.5c-1.2,1.3-2.3,2.6-3.1,4.4c-1,2.1-1.3,4.8-0.1,7c0.3,0.6,1.1,1.7,1.9,2.3c-2,4.3-3.5,8.8-4.1,13.4c-0.2-1-0.4-1.8-0.5-2.1c-0.6-4.7-0.8-9.3-0.7-14.1c0-7.8-0.2-15.5,0.6-23.1c0.1-1.2,0.2-2.3,0.5-3.5s-0.1-0.7,0.9-1.2s2.2-0.4,3.2-1c4-2.3,6.1-8.1,7.7-12c1.8-4.4,2.9-9.1,3.8-13.8c0.7-3.4,1.1-6.8,1.4-10.3c0.1-1.1,0.1-2.2,0.3-3.3c0.1-0.3,0.4-0.8,0.4-1.1c0-0.6-0.4-0.9-0.4-1.4c-0.3,0.4-0.6,0.6-0.9,0.9c-7.2,7.1-10.7,16.8-13.4,26c-3.1,10.3-5.1,20.7-5.2,31.4c-0.1,7-0.3,14.1,0.2,21.1c0.2,2.5,0.4,5,0.8,7.5c0,0.1,0.4,2.4,0.9,3.7c0,1-0.1,2,0,3c0,0.1,0,0.3,0,0.4h1.2c0-6.1,0.6-12,3.2-17.9c0.4-0.9,0.8-1.8,1.2-2.5c0,0,0,0,0.1,0c0,0,0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.5c0.3-0.5,0.7-1,0.7-1.3c2.3-3.6,4.9-7.1,7.5-10.5c0,0,2.9-3.9,2.4-1.7c-0.2,1.1-2.3,3-3.2,4.1c-1.9,2.4-4.1,5.5-6,8.5c-0.2,0.1-0.6,0.9-0.9,1.4c-0.1,0.3-0.3,0.5-0.4,0.8c6.6,2.1,11.7-2.1,15.2-7.2c1.1-1.4,2.1-2.7,3.5-3.9c2.3-1.9,4.7-2.1,7.4-3c7.3-2.4,10.4-11.7,11.4-18.6C306,157.6,300.5,145.6,291.1,146.4z" />
            <path fill="#F2D7AD" d="M240,218c0,12.2,9.8,22,22,22c12.2,0,22-9.8,22-22H240L240,218z" />
            <path fill="#5BA02E" d="M291.4,207.8c-2.7-4.6-9.1-9.1-14.8-8.7c-0.5,0-1.2,0.2-1.7,0.5h-2.2c-6.4,0.8-9.4,8.4-10.5,13.9c-0.5-3-1.6-6-2.9-8.7c-1.7-3.6-4-6.6-6.6-9.6c-1.4-1.5-1.7-1.4-1-3.2c0.6-1.4,0.8-3.6,0.4-5.1c-0.6-2.4-3-4.3-4.2-6.5c-1.3-2.3-2.1-4.8-2.5-7.3c-0.5-3.2-0.4-6.4-0.7-9.6c-0.4-4.3-5.8-6.7-10.2-6.5c-10.3,0.5-7.7,14.6-5.3,20.4c2.7,7.3,9.6,18.4,19.6,16.3c-2.3-3.6-4.8-7.5-7-11c-0.5-0.7-0.9-1.6-1.5-2.5c-0.3-0.7-2.1-4.3-0.2-2.5c1,1,1.8,3.4,2.5,4.7c0.4,0.9,1.2,2.1,1.5,2.6c5.9,10,15,17.7,16.9,29.5c0.2,1.2,0.2,2.4,0.2,3.5h1.8c0-0.4,0.1-0.7,0.1-1c0.6-5.7,3.3-14.7,9.9-16.1c0.6-0.1,2.7,0.1,4.5,0.3c0.6,0.2,1.3,0.4,1.4,0.8c0.5,1.1-2.8-0.3-3.1-0.4c-1.9-0.4-3.1,0-2.9,2.2c0.2,1.6,1.5,2.5,2.6,3.5c0.7,0.6,1.6,1.2,2.3,1.8c3.1,2.7,3.7,6.1,3.8,10c0,2.9,0.2,7.9,4.4,7.9c3.3,0,5.2-3.8,6.2-6.5C293.3,216.5,293.6,211.6,291.4,207.8z" />
            <path fill="#2D8CF0" d="M80,60c0-13.3,10.7-24,24-24s24,10.7,24,24s-10.7,24-24,24S80,73.3,80,60" />
            <path fill="#FFFFFF" d="M91.9,60c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4S91.9,58.7,91.9,60C91.9,60,91.9,60,91.9,60z" />
            <path fill="#FFFFFF" d="M101.6,60c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4c0,0,0,0,0,0c0-1.3-1.1-2.4-2.4-2.4S101.6,58.7,101.6,60C101.6,60,101.6,60,101.6,60z" />
            <path fill="#FFFFFF" d="M111.3,60c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4c0,0,0,0,0,0c0-1.3-1.1-2.4-2.4-2.4C112.4,57.6,111.3,58.7,111.3,60C111.3,60,111.3,60,111.3,60z" />
          </svg>
        );
      }
      else if (props.status === "403") {
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 360 240" width={props.width}>
            <path fill="#E4EBF7" d="M153.8,0c-7.9,0-15.7,1.8-22.5,6.4c-14.6,9.9-21.3,29.8-33,43.7c-10.9,13.1-25,19.1-38.9,26.2c-11.7,5.9-16.7,20-18.7,33.9c-1.5,10.9-2.2,22.4-7,31.9c-5.5,11-15.7,17.9-22.8,27.6c-11.7,16-14.3,40.1-6,58.7c1.8,4,4.1,7.9,7.7,9.9c2.9,1.7,6.3,1.7,9.4,1.7h0.2h292.4c3.2,0,6.6,0,9.4-1.8c4.6-3,6.1-9.4,9.1-14.5c5.8-9.9,17.3-13.8,23.2-23.7c2.6-4.4,3.7-9.3,3.7-14.5v-0.1c0-8.1-2.9-16.6-6.9-24c-1.3-2.4-2.7-4.6-4.4-6.9c-9.2-12.8-21.5-23.3-27.1-38.5c-7.5-20.4-1.4-44.5-7.8-65.4c-4.5-14.7-15.4-26.7-28.4-31.3c-11.4-4.1-23.5-2.7-35.5-1.2c-8,1-16.1,1.9-24.1,1.3c-16.2-1.4-31.4-9.4-47-14.8C171,1.9,162.6,0,154.4,0L153.8,0L153.8,0z" />
            <path fill="#FFFFFF" d="M119,65h142v126H119V65z" />
            <path fill="#C5CFD6" d="M119,65h142v14H119V65z" />
            <path fill="#ED5565" d="M241,72c0,1.1,0.9,2,2,2s2-0.9,2-2l0,0c0-1.1-0.9-2-2-2S241,70.9,241,72L241,72z" />
            <path fill="#5CB85C" d="M247,72c0,1.1,0.9,2,2,2s2-0.9,2-2l0,0c0-1.1-0.9-2-2-2S247,70.9,247,72L247,72z" />
            <path fill="#F0AD4E" d="M253,72c0,1.1,0.9,2,2,2s2-0.9,2-2l0,0c0-1.1-0.9-2-2-2S253,70.9,253,72L253,72z" />
            <path fill="#F4F5F7" d="M148.5,128.6c-0.7,2.4-2.4,9.3,0.4,17.2c0.7,2.1,3.7,9.9,12,14.4c1.4,0.8,9.2,5,17.1,2.4c5.2-1.7,5-4.6,9.8-5.8c6.4-1.6,8.6,2.9,16.5,3c9.2,0.1,16-6.1,17.5-7.5c5.4-5.2,7.1-11.1,7.8-13.9c2.8-10.4-0.5-18.9-1.3-20.9c-3.5-8.6-9.8-13.2-12.4-15c-7.8-5.1-18.7-7.2-28-3.9c-11.8,4.2-9.5,13.1-22.5,17.3c-4.6,1.5-10.7,2.2-14.6,7.5C149.5,125.4,148.8,127.3,148.5,128.6z" />
            <path fill="#FFFFFF" d="M169.4,126.6h37.3c1.1,0,2,0.9,2,2c0,0,0,0,0,0l-0.1,41h-41.2l-0.1-41C167.4,127.5,168.3,126.6,169.4,126.6z" />
            <path fill="#EAECEF" d="M172.9,131.7h8c0.7,0,1,0.3,1,1v8.1c0,0.7-0.3,1-1,1h-8c-0.7,0-1-0.3-1-1v-8.1C171.9,132,172.2,131.7,172.9,131.7z M172.6,144.4h13.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-13.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,144.7,172.2,144.4,172.6,144.4z M172.6,152.5h30.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-30.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,152.8,172.2,152.5,172.6,152.5z M172.6,148.4h30.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-30.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,148.8,172.2,148.4,172.6,148.4z M172.6,156.5h30.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-30.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,156.9,172.2,156.5,172.6,156.5z" />
            <path fill="#D7D9E0" d="M216.8,130.3V122h-0.1c-3.6,0-7-1.1-9.9-3.2c-2.9,2-6.4,3.1-10,3.1v8.3c0,6.6,4.1,8.9,10.1,11.5C212.7,139.3,216.8,136.9,216.8,130.3z" />
            <path fill="#FFFFFF" d="M209.8,128.9v-1c0-1.7-1.3-3-3-3s-3,1.4-3,3v1c-0.6,0-1,0.5-1,1v4c0,0.6,0.4,1,1,1h6c0.6,0,1-0.5,1-1v-4C210.8,129.4,210.3,128.9,209.8,128.9z M206.8,133c-0.6,0-1-0.5-1-1c0-0.6,0.4-1,1-1c0.6,0,1,0.5,1,1C207.8,132.5,207.3,133,206.8,133z M208.8,128.9h-4v-1c0-1.1,0.9-2,2-2s2,0.9,2,2V128.9z" />
            <path fill="#EAECEF" d="M146.7,156.9h3c0.2,0,0.3,0.2,0.3,0.3l0,0v0.7c0,0.2-0.1,0.3-0.3,0.3h-3v3.1c0,0.2-0.1,0.3-0.3,0.3h-0.7c-0.2,0-0.3-0.2-0.3-0.3v-3.1h-3c-0.2,0-0.3-0.2-0.3-0.3v-0.7c0-0.2,0.1-0.3,0.3-0.3h3v-3.1c0-0.2,0.1-0.3,0.3-0.3h0.7c0.2,0,0.3,0.2,0.3,0.3C146.7,153.8,146.7,156.9,146.7,156.9z M214.5,165h1.7c0.2,0,0.3,0.2,0.3,0.3v0.7c0,0.2-0.1,0.3-0.3,0.3h-1.7v1.7c0,0.2-0.1,0.3-0.3,0.3h-0.7c-0.2,0-0.3-0.2-0.3-0.3v-1.7h-1.7c-0.2,0-0.3-0.2-0.3-0.3v-0.7c0-0.2,0.1-0.3,0.3-0.3h1.7v-1.7c0-0.2,0.1-0.3,0.3-0.3h0.7c0.2,0,0.3,0.2,0.3,0.3V165z M237.3,104.2c0.4,1.8,0.9,3,1.4,3.5c0.6,0.6,1.7,1,3.3,1.3c-1.8,0.2-2.9,0.5-3.4,1.1c-0.5,0.5-1,1.8-1.3,3.8c-0.3-1.9-0.7-3.1-1.3-3.6c-0.6-0.6-1.7-1-3.4-1.2c1.8-0.3,2.9-0.7,3.4-1.3S236.9,106,237.3,104.2z M160.5,100.8c0.4,1.8,0.9,3,1.4,3.5c0.6,0.6,1.7,1,3.3,1.3c-1.8,0.2-2.9,0.5-3.4,1.1c-0.5,0.5-1,1.8-1.3,3.8c-0.3-1.9-0.7-3.1-1.3-3.6c-0.6-0.6-1.7-1-3.4-1.2c1.8-0.3,2.9-0.7,3.4-1.3C159.7,103.8,160.1,102.6,160.5,100.8z M156.8,165.2c0.2,1.1,0.5,1.8,0.9,2.1c0.3,0.3,1,0.6,2,0.8c-1.1,0.1-1.7,0.3-2.1,0.6c-0.3,0.3-0.6,1.1-0.8,2.3c-0.2-1.1-0.4-1.8-0.8-2.2c-0.3-0.3-1-0.6-2.1-0.7c1.1-0.2,1.7-0.4,2.1-0.8C156.3,167,156.6,166.3,156.8,165.2L156.8,165.2z" />
            <path fill="#FECAC3" d="M111.8,136.9c-1.3-1.6-2.2-3.5-2.1-5.6c0.4-6.2,9.1-4.8,10.8-1.7c1.7,3.1,1.5,11-0.7,11.6c-0.9,0.2-2.7-0.3-4.6-1.4l1.2,8.3h-7L111.8,136.9z" />
            <path fill="#09192A" d="M117.4,130.1c-0.9,0.5-1.6,1.5-2.4,2.8c-0.2-0.1-0.4-0.1-0.6-0.1c-1,0-1.7,0.8-1.7,1.7c0,0.5,0.2,0.9,0.5,1.2c-0.4,0.6-0.9,1.2-1.4,1.8c-1.9-1.1-3.4-4.5-1.5-7.7c1.6-6.5,10.6-2.5,12.3-3.6C123,128.5,121.8,130.4,117.4,130.1L117.4,130.1z" />
            <path fill="#5C648C" d="M106.6,171.9l10.4,36.3l7.6,26.7h5.5l-8.1-63H106.6z" />
            <path fill="#7780AA" d="M103.8,171.9c-0.2,18.6-1.1,28.9-1.3,30.6c-0.3,1.7-4.1,12.5-11.5,32.4h5.7c9.4-19.1,14.8-29.9,15.9-32.4s4.5-12.7,9.6-30.6H103.8z" />
            <path fill="#191847" d="M90.3,240l0.3-6h6c2.9,2,6.6,3.6,11.2,4.9v1.1H97.1l-3.7-0.6v0.6H90.3z M123.9,240l0.3-6h6c2.9,2,6.6,3.6,11.2,4.9v1.1h-10.9l-3.7-0.6v0.6H123.9z" />
            <path fill="#FECAC3" d="M131.3,165.4l10.9-2c2.2-1.7,4.2-2.8,6-3.4c0.5,0,1.3,0.2,0.1,1.6c-1.2,1.4-2.5,2.9-2.2,3.7c0.2,0.7,1.4,0.5,1.5,1.6c0.1,0.8-1.7,0.9-5.5,0.4l-8.8,4.8L131.3,165.4L131.3,165.4z M96.9,168.9h6c-6.6,20.3-10.1,31-10.4,32c-0.6,2.2,0.7,5.5,1.3,7.2c-1.9,1.2-1.7-3.1-4.1-1.6c-2.2,1.4-3.8,3.9-6.3,1.8c-0.3-0.3-0.6-1.2,0.2-2c2-1.9,5-5.2,5.4-6.3C89.4,198.5,92.1,188.1,96.9,168.9L96.9,168.9z" />
            <path fill="#B7CDE6" d="M113.5,142.7l4.7,0.4c1.2,14.4,7.5,23.5,21.8,20.4l1.9,18.5c-13.4,2.4-25.1-4.9-27.4-24.6C113.9,152.5,113.4,147.1,113.5,142.7L113.5,142.7z" />
            <path fill="#D1E2F5" d="M111.1,140.8l7.2,2.2c0,16.9,3.9,27.6,5.9,40h-19.5c-0.3,4.4-0.4,8.8-0.5,13.2H89.7c3.3-23.8,10.2-42.4,20.9-55.4L111.1,140.8L111.1,140.8L111.1,140.8z" />
            <path fill="#B7CDE6" d="M107.9,159c-0.5,10.5-0.2,18.5,0.9,24h-3.9C105.4,174.6,106.4,166.5,107.9,159z" />
            <path fill="#92C110" d="M291.1,146.4c-6.7,0.5-11.1,4.9-13.1,11.1c-1.1,3.3-1.2,6.7-1.8,10.1c-0.9,5.1-2.9,8.9-6.7,12.6c-1.2,1.2-2.1,2.2-2.7,3.5c-1.2,1.3-2.3,2.6-3.1,4.4c-1,2.1-1.3,4.8-0.1,7c0.3,0.6,1.1,1.7,1.9,2.3c-2,4.3-3.5,8.8-4.1,13.4c-0.2-1-0.4-1.8-0.5-2.1c-0.6-4.7-0.8-9.3-0.7-14.1c0-7.8-0.2-15.5,0.6-23.1c0.1-1.2,0.2-2.3,0.5-3.5s-0.1-0.7,0.9-1.2s2.2-0.4,3.2-1c4-2.3,6.1-8.1,7.7-12c1.8-4.4,2.9-9.1,3.8-13.8c0.7-3.4,1.1-6.8,1.4-10.3c0.1-1.1,0.1-2.2,0.3-3.3c0.1-0.3,0.4-0.8,0.4-1.1c0-0.6-0.4-0.9-0.4-1.4c-0.3,0.4-0.6,0.6-0.9,0.9c-7.2,7.1-10.7,16.8-13.4,26c-3.1,10.3-5.1,20.7-5.2,31.4c-0.1,7-0.3,14.1,0.2,21.1c0.2,2.5,0.4,5,0.8,7.5c0,0.1,0.4,2.4,0.9,3.7c0,1-0.1,2,0,3c0,0.1,0,0.3,0,0.4h1.2c0-6.1,0.6-12,3.2-17.9c0.4-0.9,0.8-1.8,1.2-2.5c0,0,0,0,0.1,0c0,0,0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.5c0.3-0.5,0.7-1,0.7-1.3c2.3-3.6,4.9-7.1,7.5-10.5c0,0,2.9-3.9,2.4-1.7c-0.2,1.1-2.3,3-3.2,4.1c-1.9,2.4-4.1,5.5-6,8.5c-0.2,0.1-0.6,0.9-0.9,1.4c-0.1,0.3-0.3,0.5-0.4,0.8c6.6,2.1,11.7-2.1,15.2-7.2c1.1-1.4,2.1-2.7,3.5-3.9c2.3-1.9,4.7-2.1,7.4-3c7.3-2.4,10.4-11.7,11.4-18.6C306,157.6,300.5,145.6,291.1,146.4z" />
            <path fill="#F2D7AD" d="M240,218c0,12.2,9.8,22,22,22c12.2,0,22-9.8,22-22H240L240,218z" />
            <path fill="#5BA02E" d="M291.4,207.8c-2.7-4.6-9.1-9.1-14.8-8.7c-0.5,0-1.2,0.2-1.7,0.5h-2.2c-6.4,0.8-9.4,8.4-10.5,13.9c-0.5-3-1.6-6-2.9-8.7c-1.7-3.6-4-6.6-6.6-9.6c-1.4-1.5-1.7-1.4-1-3.2c0.6-1.4,0.8-3.6,0.4-5.1c-0.6-2.4-3-4.3-4.2-6.5c-1.3-2.3-2.1-4.8-2.5-7.3c-0.5-3.2-0.4-6.4-0.7-9.6c-0.4-4.3-5.8-6.7-10.2-6.5c-10.3,0.5-7.7,14.6-5.3,20.4c2.7,7.3,9.6,18.4,19.6,16.3c-2.3-3.6-4.8-7.5-7-11c-0.5-0.7-0.9-1.6-1.5-2.5c-0.3-0.7-2.1-4.3-0.2-2.5c1,1,1.8,3.4,2.5,4.7c0.4,0.9,1.2,2.1,1.5,2.6c5.9,10,15,17.7,16.9,29.5c0.2,1.2,0.2,2.4,0.2,3.5h1.8c0-0.4,0.1-0.7,0.1-1c0.6-5.7,3.3-14.7,9.9-16.1c0.6-0.1,2.7,0.1,4.5,0.3c0.6,0.2,1.3,0.4,1.4,0.8c0.5,1.1-2.8-0.3-3.1-0.4c-1.9-0.4-3.1,0-2.9,2.2c0.2,1.6,1.5,2.5,2.6,3.5c0.7,0.6,1.6,1.2,2.3,1.8c3.1,2.7,3.7,6.1,3.8,10c0,2.9,0.2,7.9,4.4,7.9c3.3,0,5.2-3.8,6.2-6.5C293.3,216.5,293.6,211.6,291.4,207.8z" />
            <path fill="#FAAD14" d="M80,60c0-13.3,10.7-24,24-24s24,10.7,24,24s-10.7,24-24,24S80,73.3,80,60" />
            <path fill="#FFFFFF" d="M112.6,70.1L95,70c-0.8,0-1.4-0.6-1.4-1.4l0,0l0.1-10c0-0.8,0.6-1.4,1.4-1.4l0,0l17.6,0.1c0.8,0,1.4,0.6,1.4,1.4l-0.1,10C114,69.4,113.4,70.1,112.6,70.1L112.6,70.1" />
            <path fill="#FFFFFF" d="M107.4,59.8c0,2.1-1.7,3.8-3.7,3.8s-3.7-1.7-3.7-3.8v-5.7c0-2.1,1.7-3.8,3.7-3.8s3.7,1.7,3.7,3.8V59.8L107.4,59.8z M103.7,48.3c-3.1,0-5.6,2.5-5.6,5.6v6c0,3.1,2.5,5.6,5.6,5.6s5.6-2.5,5.6-5.6l0,0v-6C109.3,50.9,106.8,48.4,103.7,48.3z" />
          </svg>
        );
      }
      else if (props.status === "404") {
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 360 240" width={props.width}>
            <path fill="#E4EBF7" d="M153.8,0c-7.9,0-15.7,1.8-22.5,6.4c-14.6,9.9-21.3,29.8-33,43.7c-10.9,13.1-25,19.1-38.9,26.2c-11.7,5.9-16.7,20-18.7,33.9c-1.5,10.9-2.2,22.4-7,31.9c-5.5,11-15.7,17.9-22.8,27.6c-11.7,16-14.3,40.1-6,58.7c1.8,4,4.1,7.9,7.7,9.9c2.9,1.7,6.3,1.7,9.4,1.7h0.2h292.4c3.2,0,6.6,0,9.4-1.8c4.6-3,6.1-9.4,9.1-14.5c5.8-9.9,17.3-13.8,23.2-23.7c2.6-4.4,3.7-9.3,3.7-14.5v-0.1c0-8.1-2.9-16.6-6.9-24c-1.3-2.4-2.7-4.6-4.4-6.9c-9.2-12.8-21.5-23.3-27.1-38.5c-7.5-20.4-1.4-44.5-7.8-65.4c-4.5-14.7-15.4-26.7-28.4-31.3c-11.4-4.1-23.5-2.7-35.5-1.2c-8,1-16.1,1.9-24.1,1.3c-16.2-1.4-31.4-9.4-47-14.8C171,1.9,162.6,0,154.4,0L153.8,0L153.8,0z" />
            <path fill="#FFFFFF" d="M119,65h142v126H119V65z" />
            <path fill="#C5CFD6" d="M119,65h142v14H119V65z" />
            <path fill="#ED5565" d="M241,72c0,1.1,0.9,2,2,2s2-0.9,2-2l0,0c0-1.1-0.9-2-2-2S241,70.9,241,72L241,72z" />
            <path fill="#5CB85C" d="M247,72c0,1.1,0.9,2,2,2s2-0.9,2-2l0,0c0-1.1-0.9-2-2-2S247,70.9,247,72L247,72z" />
            <path fill="#F0AD4E" d="M253,72c0,1.1,0.9,2,2,2s2-0.9,2-2l0,0c0-1.1-0.9-2-2-2S253,70.9,253,72L253,72z" />
            <path fill="#F4F5F7" d="M148.5,128.6c-0.7,2.4-2.4,9.3,0.4,17.2c0.7,2.1,3.7,9.9,12,14.4c1.4,0.8,9.2,5,17.1,2.4c5.2-1.7,5-4.6,9.8-5.8c6.4-1.6,8.6,2.9,16.5,3c9.2,0.1,16-6.1,17.5-7.5c5.4-5.2,7.1-11.1,7.8-13.9c2.8-10.4-0.5-18.9-1.3-20.9c-3.5-8.6-9.8-13.2-12.4-15c-7.8-5.1-18.7-7.2-28-3.9c-11.8,4.2-9.5,13.1-22.5,17.3c-4.6,1.5-10.7,2.2-14.6,7.5C149.5,125.4,148.8,127.3,148.5,128.6z" />
            <path fill="#FFFFFF" d="M169.4,126.6h37.3c1.1,0,2,0.9,2,2c0,0,0,0,0,0l-0.1,41h-41.2l-0.1-41C167.4,127.5,168.3,126.6,169.4,126.6z" />
            <path fill="#EAECEF" d="M172.9,131.7h8c0.7,0,1,0.3,1,1v8.1c0,0.7-0.3,1-1,1h-8c-0.7,0-1-0.3-1-1v-8.1C171.9,132,172.2,131.7,172.9,131.7z M172.6,144.4h13.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-13.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,144.7,172.2,144.4,172.6,144.4z M172.6,152.5h30.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-30.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,152.8,172.2,152.5,172.6,152.5z M172.6,148.4h30.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-30.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,148.8,172.2,148.4,172.6,148.4z M172.6,156.5h30.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-30.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,156.9,172.2,156.5,172.6,156.5z" />
            <path fill="#AEB8C2" d="M216.7,133.1l-4.4-5.4c-0.2-0.3-0.5-0.4-0.8-0.4H202c-0.3,0-0.6,0.2-0.8,0.4l-4.4,5.4v2.8h20C216.7,136,216.7,133.1,216.7,133.1z" />
            <path fill="#FFFFFF" d="M200.4,120.3H213c0.4,0,0.7,0.3,0.7,0.7c0,0,0,0,0,0v17.2c0,0.4-0.3,0.7-0.7,0.7h-12.5c-0.4,0-0.7-0.3-0.7-0.7V121C199.7,120.6,200,120.3,200.4,120.3C200.4,120.3,200.4,120.3,200.4,120.3z" />
            <path fill="#DCE0E6" d="M202.1,122.1h9.3c0.2,0,0.4,0.2,0.4,0.4v4.6c0,0.2-0.2,0.4-0.4,0.4l0,0h-9.3c-0.2,0-0.4-0.2-0.4-0.4v-4.6C201.7,122.3,201.9,122.1,202.1,122.1z M202.1,129.5h9.2c0.2,0,0.4,0.2,0.4,0.4c0,0.2-0.2,0.4-0.4,0.4h-9.2c-0.2,0-0.4-0.2-0.4-0.4C201.7,129.7,201.9,129.5,202.1,129.5z M202.1,131.6h9.2c0.2,0,0.4,0.2,0.4,0.4c0,0.2-0.2,0.4-0.4,0.4h-9.2c-0.2,0-0.4-0.2-0.4-0.4C201.7,131.8,201.9,131.6,202.1,131.6z M216.7,139.7c-0.1,0.6-0.6,1-1.2,1H198c-0.6,0-1.1-0.4-1.2-1c0-0.1,0-0.2,0-0.3v-6.2h4.9c0.5,0,1,0.5,1,1v0c0,0.5,0.4,1,1,1h6.4c0.5,0,1-0.4,1-1v0c0-0.5,0.4-1,1-1h4.9v6.2C216.7,139.5,216.7,139.6,216.7,139.7z" />
            <path fill="#EAECEF" d="M146.7,156.9h3c0.2,0,0.3,0.2,0.3,0.3l0,0v0.7c0,0.2-0.1,0.3-0.3,0.3h-3v3.1c0,0.2-0.1,0.3-0.3,0.3h-0.7c-0.2,0-0.3-0.2-0.3-0.3v-3.1h-3c-0.2,0-0.3-0.2-0.3-0.3v-0.7c0-0.2,0.1-0.3,0.3-0.3h3v-3.1c0-0.2,0.1-0.3,0.3-0.3h0.7c0.2,0,0.3,0.2,0.3,0.3C146.7,153.8,146.7,156.9,146.7,156.9z M214.5,165h1.7c0.2,0,0.3,0.2,0.3,0.3v0.7c0,0.2-0.1,0.3-0.3,0.3h-1.7v1.7c0,0.2-0.1,0.3-0.3,0.3h-0.7c-0.2,0-0.3-0.2-0.3-0.3v-1.7h-1.7c-0.2,0-0.3-0.2-0.3-0.3v-0.7c0-0.2,0.1-0.3,0.3-0.3h1.7v-1.7c0-0.2,0.1-0.3,0.3-0.3h0.7c0.2,0,0.3,0.2,0.3,0.3V165z M237.3,104.2c0.4,1.8,0.9,3,1.4,3.5c0.6,0.6,1.7,1,3.3,1.3c-1.8,0.2-2.9,0.5-3.4,1.1c-0.5,0.5-1,1.8-1.3,3.8c-0.3-1.9-0.7-3.1-1.3-3.6c-0.6-0.6-1.7-1-3.4-1.2c1.8-0.3,2.9-0.7,3.4-1.3S236.9,106,237.3,104.2z M160.5,100.8c0.4,1.8,0.9,3,1.4,3.5c0.6,0.6,1.7,1,3.3,1.3c-1.8,0.2-2.9,0.5-3.4,1.1c-0.5,0.5-1,1.8-1.3,3.8c-0.3-1.9-0.7-3.1-1.3-3.6c-0.6-0.6-1.7-1-3.4-1.2c1.8-0.3,2.9-0.7,3.4-1.3C159.7,103.8,160.1,102.6,160.5,100.8z M156.8,165.2c0.2,1.1,0.5,1.8,0.9,2.1c0.3,0.3,1,0.6,2,0.8c-1.1,0.1-1.7,0.3-2.1,0.6c-0.3,0.3-0.6,1.1-0.8,2.3c-0.2-1.1-0.4-1.8-0.8-2.2c-0.3-0.3-1-0.6-2.1-0.7c1.1-0.2,1.7-0.4,2.1-0.8C156.3,167,156.6,166.3,156.8,165.2L156.8,165.2z" />
            <path fill="#FECAC3" d="M111.8,136.9c-1.3-1.6-2.2-3.5-2.1-5.6c0.4-6.2,9.1-4.8,10.8-1.7c1.7,3.1,1.5,11-0.7,11.6c-0.9,0.2-2.7-0.3-4.6-1.4l1.2,8.3h-7L111.8,136.9z" />
            <path fill="#09192A" d="M117.4,130.1c-0.9,0.5-1.6,1.5-2.4,2.8c-0.2-0.1-0.4-0.1-0.6-0.1c-1,0-1.7,0.8-1.7,1.7c0,0.5,0.2,0.9,0.5,1.2c-0.4,0.6-0.9,1.2-1.4,1.8c-1.9-1.1-3.4-4.5-1.5-7.7c1.6-6.5,10.6-2.5,12.3-3.6C123,128.5,121.8,130.4,117.4,130.1L117.4,130.1z" />
            <path fill="#5C648C" d="M106.6,171.9l10.4,36.3l7.6,26.7h5.5l-8.1-63H106.6z" />
            <path fill="#7780AA" d="M103.8,171.9c-0.2,18.6-1.1,28.9-1.3,30.6c-0.3,1.7-4.1,12.5-11.5,32.4h5.7c9.4-19.1,14.8-29.9,15.9-32.4s4.5-12.7,9.6-30.6H103.8z" />
            <path fill="#191847" d="M90.3,240l0.3-6h6c2.9,2,6.6,3.6,11.2,4.9v1.1H97.1l-3.7-0.6v0.6H90.3z M123.9,240l0.3-6h6c2.9,2,6.6,3.6,11.2,4.9v1.1h-10.9l-3.7-0.6v0.6H123.9z" />
            <path fill="#FECAC3" d="M131.3,165.4l10.9-2c2.2-1.7,4.2-2.8,6-3.4c0.5,0,1.3,0.2,0.1,1.6c-1.2,1.4-2.5,2.9-2.2,3.7c0.2,0.7,1.4,0.5,1.5,1.6c0.1,0.8-1.7,0.9-5.5,0.4l-8.8,4.8L131.3,165.4L131.3,165.4z M96.9,168.9h6c-6.6,20.3-10.1,31-10.4,32c-0.6,2.2,0.7,5.5,1.3,7.2c-1.9,1.2-1.7-3.1-4.1-1.6c-2.2,1.4-3.8,3.9-6.3,1.8c-0.3-0.3-0.6-1.2,0.2-2c2-1.9,5-5.2,5.4-6.3C89.4,198.5,92.1,188.1,96.9,168.9L96.9,168.9z" />
            <path fill="#B7CDE6" d="M113.5,142.7l4.7,0.4c1.2,14.4,7.5,23.5,21.8,20.4l1.9,18.5c-13.4,2.4-25.1-4.9-27.4-24.6C113.9,152.5,113.4,147.1,113.5,142.7L113.5,142.7z" />
            <path fill="#D1E2F5" d="M111.1,140.8l7.2,2.2c0,16.9,3.9,27.6,5.9,40h-19.5c-0.3,4.4-0.4,8.8-0.5,13.2H89.7c3.3-23.8,10.2-42.4,20.9-55.4L111.1,140.8L111.1,140.8L111.1,140.8z" />
            <path fill="#B7CDE6" d="M107.9,159c-0.5,10.5-0.2,18.5,0.9,24h-3.9C105.4,174.6,106.4,166.5,107.9,159z" />
            <path fill="#92C110" d="M291.1,146.4c-6.7,0.5-11.1,4.9-13.1,11.1c-1.1,3.3-1.2,6.7-1.8,10.1c-0.9,5.1-2.9,8.9-6.7,12.6c-1.2,1.2-2.1,2.2-2.7,3.5c-1.2,1.3-2.3,2.6-3.1,4.4c-1,2.1-1.3,4.8-0.1,7c0.3,0.6,1.1,1.7,1.9,2.3c-2,4.3-3.5,8.8-4.1,13.4c-0.2-1-0.4-1.8-0.5-2.1c-0.6-4.7-0.8-9.3-0.7-14.1c0-7.8-0.2-15.5,0.6-23.1c0.1-1.2,0.2-2.3,0.5-3.5s-0.1-0.7,0.9-1.2s2.2-0.4,3.2-1c4-2.3,6.1-8.1,7.7-12c1.8-4.4,2.9-9.1,3.8-13.8c0.7-3.4,1.1-6.8,1.4-10.3c0.1-1.1,0.1-2.2,0.3-3.3c0.1-0.3,0.4-0.8,0.4-1.1c0-0.6-0.4-0.9-0.4-1.4c-0.3,0.4-0.6,0.6-0.9,0.9c-7.2,7.1-10.7,16.8-13.4,26c-3.1,10.3-5.1,20.7-5.2,31.4c-0.1,7-0.3,14.1,0.2,21.1c0.2,2.5,0.4,5,0.8,7.5c0,0.1,0.4,2.4,0.9,3.7c0,1-0.1,2,0,3c0,0.1,0,0.3,0,0.4h1.2c0-6.1,0.6-12,3.2-17.9c0.4-0.9,0.8-1.8,1.2-2.5c0,0,0,0,0.1,0c0,0,0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.5c0.3-0.5,0.7-1,0.7-1.3c2.3-3.6,4.9-7.1,7.5-10.5c0,0,2.9-3.9,2.4-1.7c-0.2,1.1-2.3,3-3.2,4.1c-1.9,2.4-4.1,5.5-6,8.5c-0.2,0.1-0.6,0.9-0.9,1.4c-0.1,0.3-0.3,0.5-0.4,0.8c6.6,2.1,11.7-2.1,15.2-7.2c1.1-1.4,2.1-2.7,3.5-3.9c2.3-1.9,4.7-2.1,7.4-3c7.3-2.4,10.4-11.7,11.4-18.6C306,157.6,300.5,145.6,291.1,146.4z" />
            <path fill="#F2D7AD" d="M240,218c0,12.2,9.8,22,22,22c12.2,0,22-9.8,22-22H240L240,218z" />
            <path fill="#5BA02E" d="M291.4,207.8c-2.7-4.6-9.1-9.1-14.8-8.7c-0.5,0-1.2,0.2-1.7,0.5h-2.2c-6.4,0.8-9.4,8.4-10.5,13.9c-0.5-3-1.6-6-2.9-8.7c-1.7-3.6-4-6.6-6.6-9.6c-1.4-1.5-1.7-1.4-1-3.2c0.6-1.4,0.8-3.6,0.4-5.1c-0.6-2.4-3-4.3-4.2-6.5c-1.3-2.3-2.1-4.8-2.5-7.3c-0.5-3.2-0.4-6.4-0.7-9.6c-0.4-4.3-5.8-6.7-10.2-6.5c-10.3,0.5-7.7,14.6-5.3,20.4c2.7,7.3,9.6,18.4,19.6,16.3c-2.3-3.6-4.8-7.5-7-11c-0.5-0.7-0.9-1.6-1.5-2.5c-0.3-0.7-2.1-4.3-0.2-2.5c1,1,1.8,3.4,2.5,4.7c0.4,0.9,1.2,2.1,1.5,2.6c5.9,10,15,17.7,16.9,29.5c0.2,1.2,0.2,2.4,0.2,3.5h1.8c0-0.4,0.1-0.7,0.1-1c0.6-5.7,3.3-14.7,9.9-16.1c0.6-0.1,2.7,0.1,4.5,0.3c0.6,0.2,1.3,0.4,1.4,0.8c0.5,1.1-2.8-0.3-3.1-0.4c-1.9-0.4-3.1,0-2.9,2.2c0.2,1.6,1.5,2.5,2.6,3.5c0.7,0.6,1.6,1.2,2.3,1.8c3.1,2.7,3.7,6.1,3.8,10c0,2.9,0.2,7.9,4.4,7.9c3.3,0,5.2-3.8,6.2-6.5C293.3,216.5,293.6,211.6,291.4,207.8z" />
            <path fill="#A26EF4" d="M80,60c0-13.3,10.7-24,24-24s24,10.7,24,24s-10.7,24-24,24S80,73.3,80,60" />
            <path fill="#FFFFFF" d="M105.3,66.8c0.4,0.4,0.6,0.9,0.6,1.6s-0.2,1.2-0.6,1.6s-1,0.6-1.6,0.6s-1.2-0.2-1.6-0.6c-0.5-0.4-0.7-0.9-0.7-1.6s0.2-1.2,0.7-1.6c0.4-0.4,0.9-0.6,1.6-0.6C104.4,66.2,104.9,66.4,105.3,66.8 M108.8,51c1.2,1,1.7,2.4,1.7,4.2c0,1.4-0.3,2.5-1,3.5c-0.1,0.1-0.1,0.1-0.2,0.2c-0.3,0.3-1.1,1.1-2.4,2.2c-0.5,0.4-0.9,0.9-1.2,1.4c-0.3,0.6-0.4,1.3-0.4,1.9v0.4H102v-0.4c0-1.1,0.2-2.1,0.6-2.8c0.4-0.8,1.5-2,3.4-3.7l0.4-0.4c0.5-0.6,0.8-1.3,0.8-2.1c0-1-0.3-1.7-0.8-2.3c-0.6-0.6-1.3-0.8-2.3-0.8c-1.3,0-2.2,0.4-2.7,1.2c-0.3,0.4-0.5,0.9-0.6,1.6c-0.1,0.8-0.8,1.3-1.6,1.3l0,0c-1,0-1.8-1-1.6-2c0.3-1.2,0.8-2.3,1.7-3.1c1.3-1.2,2.9-1.8,5.1-1.8C106.1,49.4,107.7,49.9,108.8,51" />
          </svg>
        );
      }
      else if (props.status === "500") {
        return (
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 360 240" width={props.width}>
            <path fill="#E4EBF7" d="M353.1,161.5c-1.3-2.4-2.7-4.6-4.4-6.9c-9.2-12.7-21.5-23.2-27.1-38.5c-7.5-20.4-1.4-44.5-7.8-65.4C309.3,36,298.4,24,285.4,19.4c-11.4-4.1-23.5-2.7-35.5-1.2c-8,1-16.1,1.9-24.1,1.3c-16.2-1.4-31.4-9.4-47-14.8C171,2,162.6,0.1,154.4,0.1L153.8,0c-7.9,0-15.7,1.8-22.5,6.4c-14.6,9.9-21.3,29.8-33,43.7c-10.9,13.1-25,19.1-38.9,26.2c-11.7,5.9-16.7,20-18.7,33.9c-1.5,10.9-2.2,22.4-7,31.9c-5.5,11-15.7,17.9-22.8,27.6c-11.7,16-14.3,40.1-6,58.7c1.8,4,4.1,7.9,7.7,9.9c2.9,1.7,6.3,1.7,9.4,1.7h0.2h292.4c3.2,0,6.6,0,9.4-1.8c4.6-3,6.1-9.4,9.1-14.5c5.8-9.9,17.3-13.8,23.2-23.7c2.6-4.4,3.7-9.3,3.7-14.5v-0.1C360,177.3,357.1,168.9,353.1,161.5z" />
            <path fill="#FFFFFF" d="M119,65h142v126H119V65z" />
            <path fill="#C5CFD6" d="M119,65h142v14H119V65z" />
            <path fill="#ED5565" d="M241,72c0,1.1,0.9,2,2,2s2-0.9,2-2l0,0c0-1.1-0.9-2-2-2S241,70.9,241,72L241,72z" />
            <path fill="#5CB85C" d="M247,72c0,1.1,0.9,2,2,2s2-0.9,2-2l0,0c0-1.1-0.9-2-2-2S247,70.9,247,72L247,72z" />
            <path fill="#F0AD4E" d="M253,72c0,1.1,0.9,2,2,2s2-0.9,2-2l0,0c0-1.1-0.9-2-2-2S253,70.9,253,72L253,72z" />
            <path fill="#FECAC3" d="M111.8,136.9c-1.3-1.6-2.2-3.5-2.1-5.6c0.4-6.2,9.1-4.8,10.8-1.7c1.7,3.1,1.5,11-0.7,11.6c-0.9,0.2-2.7-0.3-4.6-1.4l1.2,8.3h-7L111.8,136.9z" />
            <path fill="#09192A" d="M117.4,130.1c-0.9,0.5-1.6,1.5-2.4,2.8c-0.2-0.1-0.4-0.1-0.6-0.1c-1,0-1.7,0.8-1.7,1.7c0,0.5,0.2,0.9,0.5,1.2c-0.4,0.6-0.9,1.2-1.4,1.8c-1.9-1.1-3.4-4.5-1.5-7.7c1.6-6.5,10.6-2.5,12.3-3.6C123,128.5,121.8,130.4,117.4,130.1L117.4,130.1z" />
            <path fill="#5C648C" d="M106.6,171.9l10.4,36.3l7.6,26.7h5.5l-8.1-63H106.6z" />
            <path fill="#7780AA" d="M103.8,171.9c-0.2,18.6-1.1,28.9-1.3,30.6c-0.3,1.7-4.1,12.5-11.5,32.4h5.7c9.4-19.1,14.8-29.9,15.9-32.4s4.5-12.7,9.6-30.6H103.8z" />
            <path fill="#191847" d="M90.3,240l0.3-6h6c2.9,2,6.6,3.6,11.2,4.9v1.1H97.1l-3.7-0.6v0.6H90.3z M123.9,240l0.3-6h6c2.9,2,6.6,3.6,11.2,4.9v1.1h-10.9l-3.7-0.6v0.6H123.9z" />
            <path fill="#FECAC3" d="M131.3,165.4l10.9-2c2.2-1.7,4.2-2.8,6-3.4c0.5,0,1.3,0.2,0.1,1.6c-1.2,1.4-2.5,2.9-2.2,3.7c0.2,0.7,1.4,0.5,1.5,1.6c0.1,0.8-1.7,0.9-5.5,0.4l-8.8,4.8L131.3,165.4L131.3,165.4z M96.9,168.9h6c-6.6,20.3-10.1,31-10.4,32c-0.6,2.2,0.7,5.5,1.3,7.2c-1.9,1.2-1.7-3.1-4.1-1.6c-2.2,1.4-3.8,3.9-6.3,1.8c-0.3-0.3-0.6-1.2,0.2-2c2-1.9,5-5.2,5.4-6.3C89.4,198.5,92.1,188.1,96.9,168.9L96.9,168.9z" />
            <path fill="#B7CDE6" d="M113.5,142.7l4.7,0.4c1.2,14.4,7.5,23.5,21.8,20.4l1.9,18.5c-13.4,2.4-25.1-4.9-27.4-24.6C113.9,152.5,113.4,147.1,113.5,142.7L113.5,142.7z" />
            <path fill="#E1E2F5" d="M111.1,140.8l7.2,2.2c0,16.9,3.9,27.6,5.9,40h-19.5c-0.3,4.4-0.4,8.8-0.5,13.2H89.7c3.3-23.8,10.2-42.4,20.9-55.4L111.1,140.8L111.1,140.8L111.1,140.8z" />
            <path fill="#B7CDE6" d="M107.9,159c-0.5,10.5-0.2,18.5,0.9,24h-3.9C105.4,174.6,106.4,166.5,107.9,159z" />
            <path fill="#92C110" d="M291.1,146.4c-6.7,0.5-11.1,4.9-13.1,11.1c-1.1,3.3-1.2,6.7-1.8,10.1c-0.9,5.1-2.9,8.9-6.7,12.6c-1.2,1.2-2.1,2.2-2.7,3.5c-1.2,1.3-2.3,2.6-3.1,4.4c-1,2.1-1.3,4.8-0.1,7c0.3,0.6,1.1,1.7,1.9,2.3c-2,4.3-3.5,8.8-4.1,13.4c-0.2-1-0.4-1.8-0.5-2.1c-0.6-4.7-0.8-9.3-0.7-14.1c0-7.8-0.2-15.5,0.6-23.1c0.1-1.2,0.2-2.3,0.5-3.5s-0.1-0.7,0.9-1.2s2.2-0.4,3.2-1c4-2.3,6.1-8.1,7.7-12c1.8-4.4,2.9-9.1,3.8-13.8c0.7-3.4,1.1-6.8,1.4-10.3c0.1-1.1,0.1-2.2,0.3-3.3c0.1-0.3,0.4-0.8,0.4-1.1c0-0.6-0.4-0.9-0.4-1.4c-0.3,0.4-0.6,0.6-0.9,0.9c-7.2,7.1-10.7,16.8-13.4,26c-3.1,10.3-5.1,20.7-5.2,31.4c-0.1,7-0.3,14.1,0.2,21.1c0.2,2.5,0.4,5,0.8,7.5c0,0.1,0.4,2.4,0.9,3.7c0,1-0.1,2,0,3c0,0.1,0,0.3,0,0.4h1.2c0-6.1,0.6-12,3.2-17.9c0.4-0.9,0.8-1.8,1.2-2.5c0,0,0,0,0.1,0c0,0,0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.3,0.3-0.5c0.3-0.5,0.7-1,0.7-1.3c2.3-3.6,4.9-7.1,7.5-10.5c0,0,2.9-3.9,2.4-1.7c-0.2,1.1-2.3,3-3.2,4.1c-1.9,2.4-4.1,5.5-6,8.5c-0.2,0.1-0.6,0.9-0.9,1.4c-0.1,0.3-0.3,0.5-0.4,0.8c6.6,2.1,11.7-2.1,15.2-7.2c1.1-1.4,2.1-2.7,3.5-3.9c2.3-1.9,4.7-2.1,7.4-3c7.3-2.4,10.4-11.7,11.4-18.6C306,157.6,300.5,145.6,291.1,146.4z" />
            <path fill="#F2D7AD" d="M240,218c0,12.2,9.8,22,22,22c12.2,0,22-9.8,22-22H240L240,218z" />
            <path fill="#5BA02E" d="M291.4,207.8c-2.7-4.6-9.1-9.1-14.8-8.7c-0.5,0-1.2,0.2-1.7,0.5h-2.2c-6.4,0.8-9.4,8.4-10.5,13.9c-0.5-3-1.6-6-2.9-8.7c-1.7-3.6-4-6.6-6.6-9.6c-1.4-1.5-1.7-1.4-1-3.2c0.6-1.4,0.8-3.6,0.4-5.1c-0.6-2.4-3-4.3-4.2-6.5c-1.3-2.3-2.1-4.8-2.5-7.3c-0.5-3.2-0.4-6.4-0.7-9.6c-0.4-4.3-5.8-6.7-10.2-6.5c-10.3,0.5-7.7,14.6-5.3,20.4c2.7,7.3,9.6,18.4,19.6,16.3c-2.3-3.6-4.8-7.5-7-11c-0.5-0.7-0.9-1.6-1.5-2.5c-0.3-0.7-2.1-4.3-0.2-2.5c1,1,1.8,3.4,2.5,4.7c0.4,0.9,1.2,2.1,1.5,2.6c5.9,10,15,17.7,16.9,29.5c0.2,1.2,0.2,2.4,0.2,3.5h1.8c0-0.4,0.1-0.7,0.1-1c0.6-5.7,3.3-14.7,9.9-16.1c0.6-0.1,2.7,0.1,4.5,0.3c0.6,0.2,1.3,0.4,1.4,0.8c0.5,1.1-2.8-0.3-3.1-0.4c-1.9-0.4-3.1,0-2.9,2.2c0.2,1.6,1.5,2.5,2.6,3.5c0.7,0.6,1.6,1.2,2.3,1.8c3.1,2.7,3.7,6.1,3.8,10c0,2.9,0.2,7.9,4.4,7.9c3.3,0,5.2-3.8,6.2-6.5C293.3,216.5,293.6,211.6,291.4,207.8z" />
            <path fill="#ED5565" d="M80,60c0-13.3,10.7-24,24-24s24,10.7,24,24s-10.7,24-24,24S80,73.3,80,60" />
            <path fill="#FFFFFF" d="M105.7,50.9l-0.6,12.3c0,0.7-0.6,1.2-1.3,1.2c-0.6,0-1.2-0.5-1.2-1.2L102,50.9c0-1,0.7-1.8,1.7-1.9c1,0,1.8,0.7,1.9,1.7C105.7,50.8,105.7,50.8,105.7,50.9 M105.4,66.7c0.4,0.4,0.6,0.9,0.6,1.5s-0.2,1.1-0.6,1.6c-0.4,0.4-1,0.6-1.6,0.6s-1.1-0.2-1.5-0.6s-0.7-0.9-0.7-1.5s0.2-1.1,0.7-1.5c0.4-0.4,0.9-0.6,1.5-0.6C104.5,66.1,105,66.3,105.4,66.7" />
            <path fill="#F4F5F7" d="M148.5,128.6c-0.7,2.4-2.4,9.3,0.4,17.2c0.7,2.1,3.7,9.9,12,14.4c1.4,0.8,9.2,5,17.1,2.4c5.2-1.7,5-4.6,9.8-5.8c6.4-1.6,8.6,2.9,16.5,3c9.2,0.1,16-6.1,17.5-7.5c5.4-5.2,7.1-11.1,7.8-13.9c2.8-10.4-0.5-18.9-1.3-20.9c-3.5-8.6-9.8-13.2-12.4-15c-7.8-5.1-18.7-7.2-28-3.9c-11.8,4.2-9.5,13.1-22.5,17.3c-4.6,1.5-10.7,2.2-14.6,7.5C149.5,125.4,148.8,127.3,148.5,128.6z" />
            <path fill="#FFFFFF" d="M169.4,126.6h37.3c1.1,0,2,0.9,2,2c0,0,0,0,0,0l-0.1,41h-41.2l-0.1-41C167.4,127.5,168.3,126.6,169.4,126.6z" />
            <path fill="#EAECEF" d="M172.9,131.7h8c0.7,0,1,0.3,1,1v8.1c0,0.7-0.3,1-1,1h-8c-0.7,0-1-0.3-1-1v-8.1C171.9,132,172.2,131.7,172.9,131.7z M172.6,144.4h13.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-13.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,144.7,172.2,144.4,172.6,144.4z M172.6,152.5h30.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-30.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,152.8,172.2,152.5,172.6,152.5z M172.6,148.4h30.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-30.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,148.8,172.2,148.4,172.6,148.4z M172.6,156.5h30.6c0.4,0,0.7,0.4,0.7,0.8c0,0.4-0.3,0.7-0.7,0.7h-30.6c-0.4,0-0.7-0.4-0.7-0.8C171.9,156.9,172.2,156.5,172.6,156.5z" />
            <path fill="#AEB8C2" d="M219.3,122.5v-4.2h1.2v4.9c0,0.3-0.2,0.5-0.5,0.5l0,0h-6.1v-1.2C213.9,122.5,219.3,122.5,219.3,122.5z" />
            <path fill="#AEB8C2" d="M218.1,118.3c0,1,0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8c0-1-0.8-1.8-1.8-1.8C218.9,116.5,218.1,117.3,218.1,118.3z" />
            <path fill="#AEB8C2" d="M197.6,120.1h18.2c0.3,0,0.5,0.2,0.5,0.5v5c0,0.3-0.2,0.5-0.5,0.5h-18.2c-0.3,0-0.5-0.2-0.5-0.5v-5C197.1,120.3,197.3,120.1,197.6,120.1z" />
            <path fill="#FFFFFF" d="M203.7,122.5h6c0.4,0,0.6,0.2,0.6,0.6l0,0c0,0.4-0.2,0.6-0.6,0.6h-6c-0.4,0-0.6-0.2-0.6-0.6l0,0C203.1,122.7,203.3,122.5,203.7,122.5z" />
            <path fill="#AEB8C2" d="M212.7,129.7h8.2v1.2h-8.2V129.7z M194.1,129.7h8.2v1.2h-8.2V129.7z" />
            <path fill="#AEB8C2" d="M191.7,130.3c0,1,0.8,1.8,1.8,1.8s1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8S191.7,129.3,191.7,130.3L191.7,130.3z" />
            <path fill="#AEB8C2" d="M218.1,130.3c0,1,0.8,1.8,1.8,1.8c1,0,1.8-0.8,1.8-1.8s-0.8-1.8-1.8-1.8C218.9,128.5,218.1,129.3,218.1,130.3z" />
            <path fill="#AEB8C2" d="M197.6,127.3h18.2c0.3,0,0.5,0.2,0.5,0.5v5c0,0.3-0.2,0.5-0.5,0.5h-18.2c-0.3,0-0.5-0.2-0.5-0.5v-5C197.1,127.5,197.3,127.3,197.6,127.3z" />
            <path fill="#FFFFFF" d="M203.7,129.7h6c0.4,0,0.6,0.2,0.6,0.6l0,0c0,0.4-0.2,0.6-0.6,0.6h-6c-0.4,0-0.6-0.2-0.6-0.6l0,0C203.1,129.9,203.3,129.7,203.7,129.7z" />
            <path fill="#AEB8C2" d="M194.1,138.1v4.2h-1.2v-4.9c0-0.3,0.2-0.5,0.5-0.5h6.1v1.2C199.5,138.1,194.1,138.1,194.1,138.1z" />
            <path fill="#AEB8C2" d="M195.3,142.3c0-1-0.8-1.8-1.8-1.8s-1.8,0.8-1.8,1.8s0.8,1.8,1.8,1.8S195.3,143.3,195.3,142.3L195.3,142.3z" />
            <path fill="#AEB8C2" d="M197.6,134.5h18.2c0.3,0,0.5,0.2,0.5,0.5v5c0,0.3-0.2,0.5-0.5,0.5h-18.2c-0.3,0-0.5-0.2-0.5-0.5v-5C197.1,134.7,197.3,134.5,197.6,134.5z" />
            <path fill="#FFFFFF" d="M203.7,136.9h6c0.4,0,0.6,0.2,0.6,0.6l0,0c0,0.4-0.2,0.6-0.6,0.6h-6c-0.4,0-0.6-0.2-0.6-0.6l0,0C203.1,137.1,203.3,136.9,203.7,136.9z" />
            <path fill="#EAECEF" d="M146.7,156.9h3c0.2,0,0.3,0.2,0.3,0.3l0,0v0.7c0,0.2-0.1,0.3-0.3,0.3h-3v3.1c0,0.2-0.1,0.3-0.3,0.3h-0.7c-0.2,0-0.3-0.2-0.3-0.3v-3.1h-3c-0.2,0-0.3-0.2-0.3-0.3v-0.7c0-0.2,0.1-0.3,0.3-0.3h3v-3.1c0-0.2,0.1-0.3,0.3-0.3h0.7c0.2,0,0.3,0.2,0.3,0.3C146.7,153.8,146.7,156.9,146.7,156.9z M214.5,165h1.7c0.2,0,0.3,0.2,0.3,0.3v0.7c0,0.2-0.1,0.3-0.3,0.3h-1.7v1.7c0,0.2-0.1,0.3-0.3,0.3h-0.7c-0.2,0-0.3-0.2-0.3-0.3v-1.7h-1.7c-0.2,0-0.3-0.2-0.3-0.3v-0.7c0-0.2,0.1-0.3,0.3-0.3h1.7v-1.7c0-0.2,0.1-0.3,0.3-0.3h0.7c0.2,0,0.3,0.2,0.3,0.3V165z M237.3,104.2c0.4,1.8,0.9,3,1.4,3.5c0.6,0.6,1.7,1,3.3,1.3c-1.8,0.2-2.9,0.5-3.4,1.1c-0.5,0.5-1,1.8-1.3,3.8c-0.3-1.9-0.7-3.1-1.3-3.6c-0.6-0.6-1.7-1-3.4-1.2c1.8-0.3,2.9-0.7,3.4-1.3S236.9,106,237.3,104.2z M160.5,100.8c0.4,1.8,0.9,3,1.4,3.5c0.6,0.6,1.7,1,3.3,1.3c-1.8,0.2-2.9,0.5-3.4,1.1c-0.5,0.5-1,1.8-1.3,3.8c-0.3-1.9-0.7-3.1-1.3-3.6c-0.6-0.6-1.7-1-3.4-1.2c1.8-0.3,2.9-0.7,3.4-1.3C159.7,103.8,160.1,102.6,160.5,100.8z M156.8,165.2c0.2,1.1,0.5,1.8,0.9,2.1c0.3,0.3,1,0.6,2,0.8c-1.1,0.1-1.7,0.3-2.1,0.6c-0.3,0.3-0.6,1.1-0.8,2.3c-0.2-1.1-0.4-1.8-0.8-2.2c-0.3-0.3-1-0.6-2.1-0.7c1.1-0.2,1.7-0.4,2.1-0.8C156.3,167,156.6,166.3,156.8,165.2L156.8,165.2z" />
          </svg>
        );
      }
    };
  }
});