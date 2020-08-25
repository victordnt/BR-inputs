export class KeyboardEventUtils {
  public static validCommands(event: KeyboardEvent): boolean {
    // Allow: Delete, Backspace, Tab, Escape, Enter, etc
    return (event.key === 'a' && event.ctrlKey === true) // Allow: Ctrl+A
      || (event.key === 'c' && event.ctrlKey === true) // Allow: Ctrl+C
      || (event.key === 'v' && event.ctrlKey === true) // Allow: Ctrl+V
      || (event.key === 'x' && event.ctrlKey === true) // Allow: Ctrl+X
      || (event.key === 'z' && event.ctrlKey === true) // Allow: Ctrl+Z
      || (event.key === 'a' && event.metaKey === true) // Cmd+A (Mac)
      || (event.key === 'c' && event.metaKey === true) // Cmd+C (Mac)
      || (event.key === 'v' && event.metaKey === true) // Cmd+V (Mac)
      || (event.key === 'x' && event.metaKey === true) // Cmd+X (Mac)
      || event.key.length > 1;
  }
}
