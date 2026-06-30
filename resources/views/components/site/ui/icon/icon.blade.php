@props(['name'])

<svg {{ $attributes->class(['icon']) }}>
    <use xlink:href="#icon-{{ $name }}"></use>
</svg>
