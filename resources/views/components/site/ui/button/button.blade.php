@props([
    'icon' => null,
    'text' => null,
])

@php
    // Получаем все атрибуты
    $allAttributes = $attributes->getAttributes();

    // Ищем icon:trailing среди атрибутов
    $iconTrailing = null;
    foreach ($allAttributes as $key => $value) {
        if (str_starts_with($key, 'icon:')) {
            $iconTrailing = $value;
            break;
        }
    }

    // Определяем иконку и позицию
    if ($iconTrailing !== null) {
        $icon = $iconTrailing;
        $iconPosition = 'right';
    } elseif ($attributes->has('icon') || $icon) {
        $icon = $icon ?? $attributes->get('icon');
        $iconPosition = 'left';
    } else {
        $icon = null;
        $iconPosition = 'left';
    }
@endphp

<button {{ $attributes->class('button') }}>
    @if($icon && $iconPosition === 'left')
        <x-site.ui.icon :name="$icon" />
    @endif

    @if($text)
        <span class="button__text">{{ $text }}</span>
    @else
        {{ $slot }}
    @endif

    @if($icon && $iconPosition === 'right')
        <x-site.ui.icon :name="$icon" />
    @endif
</button>
