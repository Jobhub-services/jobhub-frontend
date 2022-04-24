import React from 'react';
import { StandardProps } from '@/models/component';

export interface ITitleIcon extends StandardProps {
	title?: string;
	icon: React.ReactNode;
}
