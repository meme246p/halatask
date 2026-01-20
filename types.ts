import React from 'react';

export interface LoginButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
}

export interface BackgroundImage {
  url: string;
  className: string;
}