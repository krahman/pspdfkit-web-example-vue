import TextMarkupAnnotation from './TextMarkupAnnotation';
import Color from '../Color';
export default class RedactionAnnotation extends TextMarkupAnnotation {
    fillColor: Color | null | undefined;
    overlayText: string | null | undefined;
    repeatOverlayText: boolean | null | undefined;
    outlineColor: Color | null | undefined;
    static readableName: string;
    static defaultValues: any;
}
