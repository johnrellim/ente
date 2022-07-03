import 'package:photos/events/event.dart';

class TabChangedEvent extends Event {
  final int selectedIndex;
  final TabChangedEventSource source;

  TabChangedEvent(
    this.selectedIndex,
    this.source,
  );

  @override
  String toString() {
    return 'TabChangedEvent{selectedIndex: $selectedIndex, source: $source}';
  }
}

enum TabChangedEventSource {
  tabBar,
  pageView,
  collectionsPage,
  backButton,
}
