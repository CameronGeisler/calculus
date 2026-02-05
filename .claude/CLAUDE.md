# Calculus PreTeXt Project

## Build Commands

Build web version (use this PATH fix for MiKTeX):
```bash
cd "/c/Users/CKG/Documents/math/pretext/calculus"
PATH=$(echo "$PATH" | tr ':' '\n' | grep -v "claude.exe" | tr '\n' ':') pretext build web
```

View locally:
```bash
pretext view web
```

Deploy to GitHub Pages:
```bash
pretext deploy
```

## File Locations

- Source files: `source/*.ptx`
- Main book structure: `source/main.ptx`
- Custom macros: `source/docinfo.ptx`
- Chapter includes: Each chapter file uses `<xi:include>` for sections

### Custom Macros Available

- `\N`, `\Z`, `\Q`, `\R` - Number sets
- `\abs{x}`, `\set{...}`, `\brac{...}` - Delimiters
- `\eval{...}` - Evaluation bar
- `\Area{...}` - Area operator
- `\sgn`, `\csch`, `\sech` - Additional operators
- `\arcsec`, `\arccot`, `\arccsc` - Inverse trig functions

