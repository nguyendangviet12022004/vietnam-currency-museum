/**
 * Fix for React 19 compatibility with react-vertical-timeline-component
 * This file exports the timeline components with proper React 19 compatibility
 */

// @ts-ignore - Ignore type errors for React version mismatch
import { 
  VerticalTimeline as VTL, 
  VerticalTimelineElement as VTLE 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// Re-export with proper types
export const VerticalTimeline = VTL;
export const VerticalTimelineElement = VTLE;

// Default export
export default {
  VerticalTimeline: VTL,
  VerticalTimelineElement: VTLE,
};
