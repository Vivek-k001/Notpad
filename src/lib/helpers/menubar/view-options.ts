import { get } from 'svelte/store';
import { settings } from '@/store/store';
import { Notpad } from '@/helpers/notpad';
import type { SettingsType } from '@/types/SettingsTypes';

export class ViewOptions {
  public toggleStatusBar() {
    settings.update((value) => ({ ...value, statusBar: !get(settings).statusBar }));
  }

  public toggleLineNumbers() {
    Notpad.editors.focus();
    settings.update((value) => ({ ...value, lineNumbers: !get(settings).lineNumbers }));
  }

  public zoom(zoom: 'in' | 'out' | 'reset') {
    const zoomSettings = get(settings).zoom;
    const zoomLevels: SettingsType['zoom'][] = [0.5, 0.75, 0.9, 1, 1.2, 1.5, 1.75, 2];

    let newZoom: SettingsType['zoom'];

    if (zoom === 'reset') {
      newZoom = 1;
    } else {
      const currentIndex = zoomLevels.indexOf(zoomSettings);

      if (zoom === 'in' && currentIndex < zoomLevels.length - 1) {
        newZoom = zoomLevels[currentIndex + 1];
      } else if (zoom === 'out' && currentIndex > 0) {
        newZoom = zoomLevels[currentIndex - 1];
      } else {
        newZoom = zoomSettings;
      }
    }

    settings.update((value) => ({ ...value, zoom: newZoom }));
  }
}
