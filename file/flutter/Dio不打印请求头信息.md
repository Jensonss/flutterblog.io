DioInspector->DioPluggableState->_ResponseCard->_ResponseCardState->

```dart
  Widget _detailedContent(BuildContext context) {
    return ValueListenableBuilder<bool>(
      valueListenable: _isExpanded,
      builder: (_, bool value, __) {
        if (!value) {
          return const SizedBox.shrink();
        }
        return Container(
          padding: const EdgeInsets.symmetric(vertical: 8),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: <Widget>[
              //这里添加一行
                _TagText(tag: 'Request header', content: _request.headers.toString()),

              if (_requestDataBuilder != null)
                _TagText(tag: 'Request data', content: _requestDataBuilder!),
              _TagText(tag: 'Response body', content: _responseDataBuilder),
              _TagText(
                tag: 'Response headers',
                content: '\n${_response.headers}',
              ),
            ],
          ),
        );
      },
    );
  }
```